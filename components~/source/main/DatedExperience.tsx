import * as React from 'react';
import { BADGE_HEADER_COLOR, MAIN_THEME_EMPHASIS_COLOR, MAIN_THEME_LEAST_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR, MIN_FONT_SIZE, PARAGRAPH_LINE_HEIGHT, SUBHEADER_COLOR } from '../themes';
import { ExperienceTitle } from './ExperienceTitle';
import { HorizontalList } from './HorizontalList';
import { Text } from '../Text';

export interface TeamExperience {
    contributions: string[];
    teamName?: string;
    technologies: string[];
}

export interface DatedExperienceInput {
    start: Date;
    end: Date;
    jobTitle: string;
    employerName: string;
    jobLocation?: string;
    teams: TeamExperience[];
}

const LabelItem: React.FC<{first: boolean, labelName: string, labelValue: string}> = props => <p style={{marginTop: props.first ? 0 : 1}}>
    <span style={{width: 30, display: "inline-block", textAlign: 'right', marginRight: 5}}>
        <Text text={props.labelName} />
    </span>
    <span style={{color: MAIN_THEME_LESS_EMPHASIS_COLOR}}>{props.labelValue}</span>
</p>

const Paragraph: React.FC<{style?: React.CSSProperties, children: React.ReactNode}> = props => <p style={{lineHeight: PARAGRAPH_LINE_HEIGHT, ...(props.style || {})}} >
    {props.children}
</p>

const Team: React.FC<{team: TeamExperience}> = props => <>
    <Paragraph style={{marginTop: 4}}>
        {props.team.teamName && <span style={{marginRight: 5, color: BADGE_HEADER_COLOR}}>
            {props.team.teamName}
        </span>}
        <HorizontalList items={props.team.technologies} />
    </Paragraph>
    {
        props.team.contributions.length === 0 ? 
            null :
        props.team.contributions.length === 1 ? 
            <Paragraph style={{color: MAIN_THEME_LESS_EMPHASIS_COLOR}}>
                <Text text={props.team.contributions[0]} />
            </Paragraph> :
        // else
            <ul style={{listStyle: "disc inside"}}>
                {
                    props.team.contributions.map((contribution, index) => <li key={index} style={{lineHeight: PARAGRAPH_LINE_HEIGHT, color: MAIN_THEME_LESS_EMPHASIS_COLOR}}>
                        <Text text={contribution} />
                    </li>)
                }
            </ul>
    }
</>;

const DATE_SECTION_WIDTH = 125;
export const DatedExperience: React.FC<DatedExperienceInput> = props => <div style={{marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
    <div style={{width: DATE_SECTION_WIDTH, fontSize: MIN_FONT_SIZE}}>
        {
            Object.entries({
                at: props.employerName,
                ...(props.jobLocation ? {in: props.jobLocation} : {"": "Remotely"}),
                from: props.start,
                to: props.end,
            }).map(([k, v], index) => 
                <LabelItem
                    key={index}
                    first={index === 0}
                    labelName={k}
                    labelValue={typeof v === 'string' ? v : (Date.now() - v.getTime() < 1000*60) ? 'Present' : `${v.toLocaleString('en-us', {month: 'short'})} ${v.getFullYear()}`}
                />)
        }
    </div>
    <div style={{overflow: 'hidden', width: `calc(100% - ${DATE_SECTION_WIDTH}px)`}}>
        <ExperienceTitle><Text text={props.jobTitle} /></ExperienceTitle>
        <div style={{fontSize: MIN_FONT_SIZE}}>
            {
                props.teams.map((team, index) => <Team team={team} key={index}/>)
            }
        </div>
    </div>
</div>;