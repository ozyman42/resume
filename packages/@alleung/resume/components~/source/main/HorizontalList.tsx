import * as React from 'react';
import { BADGE_FONT_COLOR, BADGE_HEADER_COLOR, CODE_SNIPPET_BORDER_RADIUS, CODE_SNIPPET_STYLE, MAIN_THEME_COLOR, MAIN_THEME_EMPHASIS_COLOR, MAIN_THEME_LEAST_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR, MIN_FONT_SIZE, MONOSPACE_FONT, SUBHEADER_COLOR } from '../themes';
import { Text } from '../Text';

export const CircleSeparator: React.FC<{}> = props => <span style={{
    width: 5, height: 5,
    borderRadius: 30,
    display: "inline-block",
    verticalAlign: 'middle',
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: MAIN_THEME_LEAST_EMPHASIS_COLOR}}>
</span>

export const HorizontalList: React.FC<{title?: string, items: string[]}> = props => <pre style={{...CODE_SNIPPET_STYLE, margin: 0, display: 'inline-block', padding: 0}}>
    {props.title && <>
        <span style={{fontSize: MIN_FONT_SIZE, color: MAIN_THEME_LESS_EMPHASIS_COLOR, fontFamily: MONOSPACE_FONT}}>{props.title}: </span>
    </>}
    {
        props.items.length === 0 ? null :
        props.items.map((item, index) => <React.Fragment key={index}>
            {index > 0 && <span style={{fontSize: MIN_FONT_SIZE, color: MAIN_THEME_EMPHASIS_COLOR, fontFamily: MONOSPACE_FONT}}>,&nbsp;</span>}
            <span style={{fontSize: MIN_FONT_SIZE, color: BADGE_FONT_COLOR, fontFamily: MONOSPACE_FONT}}>
                <Text text={item} />
            </span>
        </React.Fragment>)
    }
</pre>;