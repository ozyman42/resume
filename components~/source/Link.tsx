import * as React from 'react';
import { LINK_COLOR } from './themes';

export const Link: React.FC<{to: string, text: string}> = props => <a style={{textDecorationColor: LINK_COLOR, color: 'white'}} href={props.to}>
    {props.text}
</a>;