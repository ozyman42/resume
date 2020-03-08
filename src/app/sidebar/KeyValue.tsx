import * as React from 'react';
import { MIN_FONT_SIZE } from 'app/themes';

export const KeyValue: React.FC<{k: string, v: string, link?: string}> = props => <div style={{fontSize:MIN_FONT_SIZE,margin:'0 0 20px 0'}}>
    <p style={{marginBottom:5}}><b>{props.k}</b></p>
    <p>
        {
            props.link ? <a href={props.link}>{props.v}</a> : props.v
        }
    </p>
</div>;