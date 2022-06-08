import * as React from 'react';
import { BADGE_FONT_COLOR, BADGE_HEADER_COLOR, CODE_SNIPPET_STYLE, MAIN_THEME_EMPHASIS_COLOR, MONOSPACE_FONT } from '../themes';
import { Text } from '../Text';

const Mono: React.FC<{type: 'head' | 'item' | 'reg'}> = props => 
    <span style={{fontFamily: MONOSPACE_FONT, color: {head: BADGE_HEADER_COLOR, item: BADGE_FONT_COLOR, reg: MAIN_THEME_EMPHASIS_COLOR}[props.type]}}>{props.children}</span>

export const SkillList: React.FC<{skills: string[]; header: string}> = props => 
<pre style={{...CODE_SNIPPET_STYLE, marginBottom: 5}}>
    <Mono type='head'>{props.header}</Mono><Mono type='reg'>:</Mono>&#13;&#10;{/*<Mono type='reg'>&#91;</Mono>*/}
    {
        props.skills.map((skill, index) => <React.Fragment key={index}>
            <Mono type='item'>
                <Text text={skill.split(" ").join('\u00A0')} splitBy={'\u00A0'} />
            </Mono>
            {index < props.skills.length - 1 && <Mono type="reg">, </Mono>}
        </React.Fragment>)
    }
    {/*<Mono type="reg">&#93;</Mono>*/}
</pre>