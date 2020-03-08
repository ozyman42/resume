import * as React from 'react';
import { hot } from 'react-hot-loader';
import { MAIN_THEME_COLOR, MAIN_SIDEBAR_COLOR, MAIN_CONENT_COLOR } from './themes';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { MainContent } from './main';

// wkhtmltopdf -T 0 -B 0 -L 0 -R 0 --page-size Letter

const pdfDimensions = {
    width: 1020,
    height: 1320
}

const HEADER_HEIGHT = 130;
const SIDEBAR_WIDTH = 300;

export const App = hot(module)(() => (
    <div style={{display: "block", width: pdfDimensions.width, height: pdfDimensions.height, backgroundColor: MAIN_CONENT_COLOR}}>
        <div style={{width: '100%', height: HEADER_HEIGHT, backgroundColor: MAIN_THEME_COLOR}}>
            <div style={{padding:23}}>
                <Header />
            </div>
        </div>
        <div style={{height: `calc(100% - ${HEADER_HEIGHT}px)`}}>
            <div style={{backgroundColor: MAIN_SIDEBAR_COLOR, width: SIDEBAR_WIDTH, float: 'right', height: '100%'}}>
                <div style={{padding: '20px 10px 0 20px'}}>
                    <Sidebar />
                </div>
            </div>
            <div style={{overflow: 'hidden'}}>
                <div style={{padding: 16}}>
                    <div style={{marginBottom: 2}}/>
                    <MainContent />
                </div>
            </div>
        </div>
    </div>
));
