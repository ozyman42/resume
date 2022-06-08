import * as React from 'react';
import { MAIN_THEME_COLOR, MAIN_THEME_EMPHASIS_COLOR, SECONDARY_THEME_COLOR, SECTION_DIVIDER_COLOR} from './themes';
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
const SIDEBAR_WIDTH = 250;

export const Resume: React.FC = () => <div style={{display: "flex", width: pdfDimensions.width, height: pdfDimensions.height, flexDirection: 'column'}}>
    <div style={{width: '100%', height: HEADER_HEIGHT, backgroundColor: SECONDARY_THEME_COLOR, overflow: 'hidden', padding: 15, boxSizing: 'border-box', borderBottom: `1px solid ${SECTION_DIVIDER_COLOR}`}}>
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