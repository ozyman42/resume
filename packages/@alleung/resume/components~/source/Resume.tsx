import * as React from 'react';
import { MAIN_THEME_COLOR, MAIN_SIDEBAR_COLOR, MAIN_CONENT_COLOR } from './themes';
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
const SIDEBAR_WIDTH = 290;

export const Resume: React.FC = () => <div style={{display: "block", width: pdfDimensions.width, height: pdfDimensions.height, backgroundColor: MAIN_CONENT_COLOR}}>
    <div style={{width: '100%', height: HEADER_HEIGHT, backgroundColor: MAIN_THEME_COLOR, overflow: 'hidden'}}>
        <div style={{padding:15}}>
            <Header />
        </div>
    </div>
    <div style={{height: `calc(100% - ${HEADER_HEIGHT}px)`, overflow: 'hidden'}}>
        <div style={{backgroundColor: MAIN_SIDEBAR_COLOR, width: SIDEBAR_WIDTH, float: 'right', height: '100%'}}>
            <div style={{padding: 15}}>
                <Sidebar />
            </div>
        </div>
        <div style={{overflow: 'hidden'}}>
            <div style={{padding: 15}}>
                <MainContent />
            </div>
        </div>
    </div>
</div>;