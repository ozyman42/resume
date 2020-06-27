import * as React from 'react';
import { MIN_FONT_SIZE } from 'app/themes';
import { Link } from 'app/Link';
import { Text } from '../Text';

export const KeyValue: React.FC<{k: string, v: string, link?: string}> = props => <div style={{fontSize:MIN_FONT_SIZE,margin:'0 0 15px 0'}}>
    <p style={{marginBottom:0}}><b><Text text={props.k} /></b></p>
    <p>
        {
            props.link ?  <Link to={props.link} text={props.v} /> : props.v
        }
    </p>
</div>;