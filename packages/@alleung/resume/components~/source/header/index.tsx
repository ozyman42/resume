import * as React from 'react';
import { MAIN_THEME_EMPHASIS_COLOR, MAIN_THEME_LEAST_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR } from '../themes';
import { Text } from '../Text';

const RIGHT_SIDEBAR_WIDTH = 400;

const HeaderKeyValue: React.FC<{k: string, v: string}> = ({k, v}) =>
<p style={{marginTop: 6}}>
    <b><Text text={k} /></b> <Text text={v}/>
</p>;

const Norm: React.FC<{t: string}> = ({t}) => <span style={{color: MAIN_THEME_LEAST_EMPHASIS_COLOR}}>{t}</span>
const Bold: React.FC<{t: string}> = ({t}) => <span style={{color: MAIN_THEME_EMPHASIS_COLOR}}>{t}</span>

export const Header: React.FC = () => {
    return <div style={{width: '100%', color: MAIN_THEME_EMPHASIS_COLOR, display: 'flex', flexDirection: 'row'}}>
        <div style={{marginRight: 25, marginLeft: 15}}>
            <img src="./profile-pic.png" height={85} style={{marginTop: 5, borderRadius: 50, verticalAlign: 'middle'}} />
        </div>
        <div style={{overflow: 'hidden', flexGrow: 1}}>
            <div style={{marginTop: 5}}>
                <span style={{fontSize: 40, verticalAlign: 'middle', fontWeight: 'bold'}}>Alex Leung</span>
            </div>
            <p style={{fontSize: 17, marginTop: 11, color: MAIN_THEME_LESS_EMPHASIS_COLOR}}>
                {
                    ['Senior SWE', 'Experimenter', 'Investor', 'Lifelong Student'].map((iAmA, index) => 
                        <span key={index}>
                            {index == 0 ? null : <span style={{width: 17, display:'inline-block', textAlign: 'center', color: MAIN_THEME_LEAST_EMPHASIS_COLOR}}>•</span>}
                            <Text text={iAmA} />
                        </span>
                    )
                }
            </p>
        </div>
        <div style={{width: RIGHT_SIDEBAR_WIDTH, textAlign: 'right'}}>
            <p style={{marginTop: 8}}><Bold t="University of Washington" /> <Norm t="2014 - 2018" /></p>
            <p style={{marginTop: 8}}><Norm t="Bachelor of Science in"/> <Bold t="Computer Science" /></p>
            <p style={{marginTop: 8}}><Norm t="with an" /> <Bold t="Entrepreneurship" /> <Norm t="minor" /></p>
        </div>
    </div>
}