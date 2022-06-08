import { CSSProperties } from "react";

export const MAIN_THEME_COLOR = "rgb(31, 41, 55)";
export const MAIN_THEME_EMPHASIS_COLOR = "#ffffff";
export const MAIN_THEME_LEAST_EMPHASIS_COLOR = "rgb(156, 163, 175)";
export const MAIN_THEME_LESS_EMPHASIS_COLOR = "rgb(209, 213, 219)";
export const MAIN_CONTENT_DIVIDER_COLOR = "rgb(244, 114, 182)";
export const SUBHEADER_COLOR = "rgb(244, 114, 182)";
export const SECONDARY_THEME_COLOR = "rgb(17, 24, 39)";
export const SECTION_DIVIDER_COLOR = "rgb(75, 85, 99)";
export const TERTIARY_THEME_COLOR  = "rgb(15, 20, 27)";
export const LINK_COLOR = "rgb(63, 131, 248)";
export const BADGE_BACKGROUND_COLOR = "rgb(28, 100, 242)";
export const BADGE_FONT_COLOR = "rgb(150, 203, 254)";
export const BADGE_HEADER_COLOR = "rgb(249, 238, 152)";
export const MONOSPACE_FONT = `monospace`;
export const CODE_SNIPPET_BORDER_RADIUS = 12;
export const CODE_SNIPPET_STYLE: CSSProperties = {
    borderRadius: CODE_SNIPPET_BORDER_RADIUS,
    background: MAIN_THEME_COLOR,
    padding: 10,
    whiteSpace: 'pre-wrap',
    fontFamily: MONOSPACE_FONT
};
export const PARAGRAPH_LINE_HEIGHT = 1.6;
export const MIN_FONT_SIZE = "13px";
export const EXPERIENCE_TITLE_FONT_SIZE = MIN_FONT_SIZE; //"15px";