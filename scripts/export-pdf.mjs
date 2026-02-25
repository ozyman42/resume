import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import { chromium } from 'playwright'

const sourceUrl = process.env.PDF_SOURCE_URL || 'http://127.0.0.1:4173'
const outputPath = process.env.PDF_OUTPUT_PATH || 'out/resume.pdf'

await mkdir(dirname(outputPath), { recursive: true })

const browser = await chromium.launch({ headless: true })

try {
  const page = await browser.newPage({
    viewport: { width: 1366, height: 1768 },
  })

  await page.goto(sourceUrl, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'screen' })

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.25in',
      right: '0.25in',
      bottom: '0.25in',
      left: '0.25in',
    },
  })
} finally {
  await browser.close()
}
