import * as React from 'react';
import { MIN_FONT_SIZE, PARAGRAPH_LINE_HEIGHT } from 'app/themes';
import { Link } from 'app/Link';
import { ExperienceTitle } from './ExperienceTitle';
import { CircleSeparator } from './HorizontalList';

export interface SimpleExperienceInput {
    title: string;
    description: string;
    link?: {
        text: string,
        href: string
    }
}

export const SimpleExperience: React.FC<SimpleExperienceInput> = props => <div style={{marginBottom: 10}}>
    <div>
        <span style={{display:'inline-block'}}><ExperienceTitle>{props.title}</ExperienceTitle></span>
        <CircleSeparator />
        <span style={{fontSize: MIN_FONT_SIZE}}>
            {props.link ? <Link to={props.link.href} text={props.link.text}/> : null}
        </span>
    </div>
    <p style={{marginTop: 4, fontSize: MIN_FONT_SIZE, lineHeight: PARAGRAPH_LINE_HEIGHT}}>
        {props.description}
    </p>
</div>