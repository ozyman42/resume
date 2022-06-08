import * as React from 'react';
import { MAIN_THEME_LEAST_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR, MIN_FONT_SIZE } from '../themes';
import { Link } from '../Link';
import { IconType } from 'react-icons';

export const KeyValue: React.FC<{k: IconType, v: string, link?: string}> = props => <div style={{fontSize:MIN_FONT_SIZE,margin:'0 0 15px 0'}}>
    <p>
        <span style={{color: MAIN_THEME_LEAST_EMPHASIS_COLOR, fontSize: 17, verticalAlign: 'middle', marginBottom: -4, display: 'inline-block'}}><props.k /></span>
        <span style={{marginLeft: 8, verticalAlign: 'middle', paddingBottom: 14, color: MAIN_THEME_LESS_EMPHASIS_COLOR}}>{
            props.link ?  <Link to={props.link} text={props.v} /> : props.v
        }
        </span>
    </p>
</div>;