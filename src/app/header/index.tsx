import * as React from 'react';
import { MAIN_THEME_CONSTRAST_COLOR } from 'app/themes';

const RIGHT_SIDEBAR_WIDTH = 500;

export const Header: React.FC = () => {
    return <div style={{width: '100%', color: MAIN_THEME_CONSTRAST_COLOR}}>
        <div style={{float: 'right', width: RIGHT_SIDEBAR_WIDTH, textAlign: 'right'}}>
            <p style={{marginTop: 7}}>
                <b>University of Washington</b>: 2014 — 2018
            </p>
            <p style={{marginTop: 7}}>
                <b>Major</b>: Bachelor of Science in Computer Science
            </p>
            <p style={{marginTop: 7}}>
                <b>Minor</b>: Enrepreneurship
            </p>
        </div>
        <div style={{overflow: 'hidden'}}>
            <p style={{fontSize: 40}}>Alex Leung</p>
            <p style={{fontSize: 17, marginTop: 7}}>
                {
                    ['Software Engineer', 'Entrepreneur', 'Full-Stack Developer'].map((iAmA, index) => 
                        <span key={index}>
                            {index == 0 ? null : <span style={{width: 30, display:'inline-block', textAlign: 'center'}}>•</span>}
                            {iAmA}
                        </span>
                    )
                }
            </p>
        </div>
    </div>
}