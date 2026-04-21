/// <reference types="bun" />

import { mkdir } from "node:fs/promises";
import { createServer } from "node:net";
import { dirname } from "node:path";
import { chromium, type Page } from "playwright";

const outputPath = process.env.PDF_OUTPUT_PATH || "out/resume.pdf";
const readyTimeoutMs = 30_000;
const pollIntervalMs = 250;
const defaultHost = "127.0.0.1";
const defaultPort = 3000;
const pdfWidth = 1020;
const pdfHeight = 1320;
const pdfScale = 0.8;
const expectedWebFonts = ["Resume Sans", "Resume Mono"];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url: string, timeoutMs: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function waitForUiReady(url: string, devServer: Bun.Subprocess) {
  const deadline = Date.now() + readyTimeoutMs;

  while (Date.now() < deadline) {
    if (devServer.exitCode !== null) {
      throw new Error(`Dev server exited before ${url} became ready.`);
    }

    try {
      const response = await fetchWithTimeout(url, 2_000);

      if (response.ok) {
        await response.body?.cancel();
        return;
      }

      await response.body?.cancel();
    } catch {
      // The dev server is still starting.
    }

    await sleep(pollIntervalMs);
  }

  throw new Error(`Timed out waiting for ${url} after ${readyTimeoutMs}ms.`);
}

function isPortAvailable(port: number) {
  return new Promise<boolean>((resolve) => {
    const server = createServer();

    server.unref();
    server.once("error", () => resolve(false));
    server.listen({ port }, () => {
      server.close(() => resolve(true));
    });
  });
}

async function findAvailablePort(startPort: number) {
  for (let port = startPort; port < startPort + 100; port += 1) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }

  throw new Error(`No available port found starting at ${startPort}.`);
}

async function getDevServerConfig() {
  const port = await findAvailablePort(defaultPort);

  return {
    command: ["bun", "run", "dev", "--", "-p", String(port), "-H", defaultHost],
    sourceUrl: `http://${defaultHost}:${port}`,
  };
}

async function printPdf(url: string, path: string) {
  await mkdir(dirname(path), { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({
      viewport: { width: pdfWidth, height: pdfHeight },
    });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "screen" });
    await assertWebFontsLoaded(page, expectedWebFonts);

    await page.pdf({
      path,
      format: "Letter",
      scale: pdfScale,
      printBackground: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });
  } finally {
    await browser.close();
  }
}

async function assertWebFontsLoaded(page: Page, fonts: string[]) {
  await page.evaluate(async (expectedFonts) => {
    const normalize = (family: string) => family.replace(/^["']|["']$/g, "");

    const projectFonts = Array.from(document.fonts).filter((font) =>
      expectedFonts.includes(normalize(font.family)),
    );

    await Promise.all(projectFonts.map((font) => font.load()));
    await document.fonts.ready;

    const loadedFonts = Array.from(document.fonts).map((font) => ({
      family: normalize(font.family),
      status: font.status,
      weight: font.weight,
      style: font.style,
    }));

    const missingFonts = expectedFonts.filter((font) =>
      !loadedFonts.some((loadedFont) => loadedFont.family === font),
    );
    const failedFonts = loadedFonts.filter((font) =>
      expectedFonts.includes(font.family) && font.status !== "loaded",
    );

    if (missingFonts.length > 0 || failedFonts.length > 0) {
      throw new Error(
        [
          missingFonts.length > 0 ? `Missing webfonts: ${missingFonts.join(", ")}` : null,
          failedFonts.length > 0
            ? `Failed webfonts: ${failedFonts
                .map((font) => `${font.family} ${font.weight} ${font.style} (${font.status})`)
                .join(", ")}`
            : null,
        ]
          .filter(Boolean)
          .join("; "),
      );
    }
  }, fonts);
}

async function getPDF() {
  const { command, sourceUrl } = await getDevServerConfig();
  const devServer = Bun.spawn(command, {
    stdout: "inherit",
    stderr: "inherit",
  });

  try {
    await waitForUiReady(sourceUrl, devServer);
    await printPdf(sourceUrl, outputPath);
  } finally {
    if (devServer.exitCode === null) {
      devServer.kill();
    }

    await devServer.exited;
  }
}

getPDF().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
