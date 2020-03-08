import * as React from 'react';
import { MIN_FONT_SIZE, PARAGRAPH_LINE_HEIGHT } from 'app/themes';

export interface DatedExperienceInput {
    start: string, end: string,
    name: string, 
    subheadings: string[],
    contributions: string[]
}

const FromTo: React.FC = props => <span style={{width: 30, display: "inline-block", textAlign: 'right', marginRight: 4}}>
    {props.children}
</span>

export const DatedExperience: React.FC<DatedExperienceInput> = props => <div>
    <div style={{float: 'left', width: 125, fontSize: MIN_FONT_SIZE}}>
        <p>
            <FromTo>from</FromTo>
            <b>{props.start}</b>
        </p>
        <p style={{marginTop:6}}>
            <FromTo>to</FromTo>
            <b>{props.end}</b>
        </p>
    </div>
    <div style={{overflow: 'hidden'}}>
        <p><b>{props.name}</b></p>
        <div style={{marginTop: 4 ,fontSize: MIN_FONT_SIZE}}>
            {
                props.subheadings.length === 0 ? null :
                props.subheadings.map((item, index) => <span style={{marginBottom: 4}}>
                    {index > 0 ? <span style={{width: 30, textAlign: 'center', verticalAlign: 'middle', display: 'inline-block', fontSize: 17}}>•</span> : null}
                    <span style={{fontStyle:'italic'}}>{item}</span>
                </span>)
            }
            {
                props.contributions.length === 0 ? null : props.contributions.length === 1 ? <p style={{lineHeight: PARAGRAPH_LINE_HEIGHT}}>{props.contributions[0]}</p> :
                <ul style={{listStyle: "disc inside"}}>
                    {
                        props.contributions.map((contribution, index) => <li key={index} style={{lineHeight: PARAGRAPH_LINE_HEIGHT}}>
                            {contribution}
                        </li>)
                    }
                </ul>
            }
        </div>
    </div>
</div>;