import * as React from 'react';
import { MAIN_THEME_CONSTRAST_COLOR } from 'app/themes';

const RIGHT_SIDEBAR_WIDTH = 500;

export const Header: React.FC = () => {
    return <div style={{width: '100%', color: MAIN_THEME_CONSTRAST_COLOR}}>
        <div style={{float: 'right', width: RIGHT_SIDEBAR_WIDTH, textAlign: 'right'}}>
            <p><b>University of Washington, 2014 — 2018</b></p>
            <br/>
            <p><b>Major</b>: Bachelor of Science in Computer Science</p>
            <p style={{marginTop: 10}}>
                <b>Minor</b>: Enrepreneurship
            </p>
        </div>
        <div style={{overflow: 'hidden'}}>
            <p style={{fontSize: 40}}>Alex Leung</p>
            <p style={{fontSize: 20, marginTop: 10}}>
                {
                    ['Software Engineer', 'Entrepreneur'].map((iAmA, index) => 
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