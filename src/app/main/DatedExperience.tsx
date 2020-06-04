import * as React from 'react';
import { MIN_FONT_SIZE, PARAGRAPH_LINE_HEIGHT } from 'app/themes';
import { ExperienceTitle } from './ExperienceTitle';
import { HorizontalList } from './HorizontalList';

export interface TeamExperience {
    contributions: string[];
    teamName: string;
    technologies: string[];
}

export interface DatedExperienceInput {
    start: string;
    end: string;
    jobTitle: string;
    employerName: string;
    jobLocation: string;
    teams: TeamExperience[];
}

const LabelItem: React.FC<{first: boolean, labelName: string, labelValue: string}> = props => <p style={{marginTop: props.first ? 0 : 1}}>
    <span style={{width: 30, display: "inline-block", textAlign: 'right', marginRight: 8}}>
        {props.labelName}
    </span>
    <b>{props.labelValue}</b>
</p>

const Paragraph: React.FC<{style?: React.CSSProperties}> = props => <p style={{lineHeight: PARAGRAPH_LINE_HEIGHT, ...(props.style || {})}} >
    {props.children}
</p>

const Team: React.FC<{displayName: boolean, team: TeamExperience}> = props => <>
    <Paragraph style={{margin: '4px 0'}}>
        {props.displayName ? <>
            <b>{props.team.teamName}</b>
            <span style={{marginLeft: 10}} ></span>
        </> : null }
        <HorizontalList items={props.team.technologies} />
    </Paragraph>
    {
        props.team.contributions.length === 0 ? 
            null :
        props.team.contributions.length === 1 ? 
            <Paragraph>{props.team.contributions[0]}</Paragraph> :
        // else
            <ul style={{listStyle: "disc inside"}}>
                {
                    props.team.contributions.map((contribution, index) => <li key={index} style={{lineHeight: PARAGRAPH_LINE_HEIGHT}}>
                        {contribution}
                    </li>)
                }
            </ul>
    }
</>;

export const DatedExperience: React.FC<DatedExperienceInput> = props => <div style={{marginBottom: 10}}>
    <div style={{float: 'left', width: 155, fontSize: MIN_FONT_SIZE}}>
        {
            Object.entries({
                at: props.employerName,
                in: props.jobLocation,
                from: props.start,
                to: props.end,
            }).map(([k, v], index) => 
                <LabelItem
                    key={index}
                    first={index === 0}
                    labelName={k}
                    labelValue={v}
                />)
        }
    </div>
    <div style={{overflow: 'hidden'}}>
        <ExperienceTitle>{props.jobTitle}</ExperienceTitle>
        <div style={{fontSize: MIN_FONT_SIZE}}>
            {
                props.teams.map((team, index) => <Team displayName={props.teams.length > 1} team={team} key={index}/>)
            }
        </div>
    </div>
</div>;