import * as React from 'react';
import { MAIN_THEME_COLOR, SECONDARY_THEME_COLOR, SECTION_DIVIDER_COLOR, SANS_FONT} from './themes';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { MainContent } from './main';

// wkhtmltopdf -T 0 -B 0 -L 0 -R 0 --page-size Letter
// wkhtmltopdf prefers dimensions of 1020, 1320

// Print using Chromium with background graphics enabled.

const pdfDimensions = {
    width: 1020,
    height: 1320
}

const HEADER_HEIGHT = 125;
const SIDEBAR_WIDTH = 270;
const REQUIRED_WEB_FONT_FAMILIES = ["Resume Sans", "Resume Mono"];

function normalizeFontFamily(family: string) {
    return family.replace(/^["']|["']$/g, "");
}

async function assertWebFontsLoaded() {
    await document.fonts.ready;

    const fonts = Array.from(document.fonts);
    const projectFonts = fonts.filter((font) => REQUIRED_WEB_FONT_FAMILIES.includes(normalizeFontFamily(font.family)));

    await Promise.all(projectFonts.map((font) => font.load()));
    await document.fonts.ready;

    const loadedFonts = fonts.map((font) => ({
        family: normalizeFontFamily(font.family),
        status: font.status,
        weight: font.weight,
        style: font.style,
    }));
    const missingFonts = REQUIRED_WEB_FONT_FAMILIES.filter((font) => !loadedFonts.some((loadedFont) => loadedFont.family === font));
    const failedFonts = loadedFonts.filter((font) => REQUIRED_WEB_FONT_FAMILIES.includes(font.family) && font.status !== "loaded");

    if (missingFonts.length > 0 || failedFonts.length > 0) {
        throw new Error([
            missingFonts.length > 0 ? `Missing webfonts: ${missingFonts.join(", ")}` : null,
            failedFonts.length > 0
                ? `Failed webfonts: ${failedFonts.map((font) => `${font.family} ${font.weight} ${font.style} (${font.status})`).join(", ")}`
                : null,
        ].filter(Boolean).join("; "));
    }
}

export const Resume = () => {
    const [fontError, setFontError] = React.useState<Error | null>(null);

    React.useEffect(() => {
        assertWebFontsLoaded().catch(setFontError);
    }, []);

    if (fontError) {
        throw fontError;
    }

    return <div style={{display: "flex", width: pdfDimensions.width, height: pdfDimensions.height, flexDirection: 'column', fontFamily: SANS_FONT}}>
    <div style={{height: HEADER_HEIGHT - 30, backgroundColor: SECONDARY_THEME_COLOR, overflow: 'hidden', padding: 15, boxSizing: 'content-box', borderBottom: `1px solid ${SECTION_DIVIDER_COLOR}`}}>
        <Header />
    </div>
    <div style={{display: 'flex', overflow: 'hidden', flexDirection: 'row', flexGrow: 1}}>
        <div style={{overflow: 'hidden', height: '100%', backgroundColor: MAIN_THEME_COLOR, flexGrow: 1, width: `calc(100% - ${SIDEBAR_WIDTH}px)`}}>
            <div style={{padding: 15}}>
                <MainContent />
            </div>
        </div>
        <div style={{backgroundColor: SECONDARY_THEME_COLOR, width: SIDEBAR_WIDTH, height: '100%', borderLeft: `1px solid ${SECTION_DIVIDER_COLOR}`, boxSizing: 'border-box'}}>
            <Sidebar />
        </div>
    </div>
</div>;
}
