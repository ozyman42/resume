import * as React from 'react';
import { MIN_FONT_SIZE, PARAGRAPH_LINE_HEIGHT } from 'app/themes';

export interface SimpleExperienceInput {
    title: string;
    description: string;
    link?: {
        text: string,
        href: string
    }
}

export const SimpleExperience: React.FC<SimpleExperienceInput> = props => <div style={{marginBottom: 10}}>
    <p><b>{props.title}</b></p>
    <p style={{marginTop: 4, fontSize: MIN_FONT_SIZE, lineHeight: PARAGRAPH_LINE_HEIGHT}}>
        {props.description}
        {props.link ? <><br/><a href={props.link.href}>{props.link.text}</a></> : null}
    </p>
</div>