import * as React from 'react';
import { MAIN_THEME_CONSTRAST_COLOR } from 'app/themes';
import { Text } from '../Text';

const RIGHT_SIDEBAR_WIDTH = 500;

const HeaderKeyValue: React.FC<{k: string, v: string}> = ({k, v}) =>
<p style={{marginTop: 7}}>
    <b><Text text={k} /></b>: <Text text={v}/>
</p>;

export const Header: React.FC = () => {
    return <div style={{width: '100%', color: MAIN_THEME_CONSTRAST_COLOR}}>
        <div style={{float: 'right', width: RIGHT_SIDEBAR_WIDTH, textAlign: 'right'}}>
            <HeaderKeyValue k={"University of Washington"} v={"2014 — 2018"} />
            <HeaderKeyValue k={"Major"} v={"Bachelor of Science in Computer Science"} />
            <HeaderKeyValue k={"Minor"} v={"Entrepreneurship"} />
        </div>
        <div style={{overflow: 'hidden'}}>
            <p style={{fontSize: 40}}>Alex Leung</p>
            <p style={{fontSize: 17, marginTop: 7}}>
                {
                    ['Software Engineer', 'Entrepreneur', 'Full-Stack Developer'].map((iAmA, index) => 
                        <span key={index}>
                            {index == 0 ? null : <span style={{width: 30, display:'inline-block', textAlign: 'center'}}>•</span>}
                            <Text text={iAmA} />
                        </span>
                    )
                }
            </p>
        </div>
    </div>
}