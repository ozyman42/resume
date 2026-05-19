import * as React from 'react';
import { BADGE_FONT_COLOR, LINK_COLOR } from './themes';
import { FaLink } from 'react-icons/fa';

export const Link: React.FC<{to: string, text: string}> = props => <>
    <a style={{textDecorationColor: LINK_COLOR, color: BADGE_FONT_COLOR, textDecoration: "underline"}} href={props.to} target='_blank'>
        {props.text}
    </a>
    <FaLink style={{display: 'inline', marginLeft: 3}} />
</>