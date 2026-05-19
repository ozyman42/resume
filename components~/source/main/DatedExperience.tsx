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
    end: Date | 'Present';
    jobTitle: string;
    employerName: string;
    jobLocation?: string;
    teams: TeamExperience[];
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatLabelValue(value: string | Date) {
    if (typeof value === 'string') {
        return value;
    }

    return `${MONTH_LABELS[value.getMonth()]} ${value.getFullYear()}`;
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
    <Paragraph style={{marginTop: 0}}>
        {props.team.teamName && <span style={{marginRight: 10, color: BADGE_HEADER_COLOR, whiteSpace: 'nowrap', fontSize: 15}}>
            {props.team.teamName}
        </span>}
        <HorizontalList items={props.team.technologies} />
    </Paragraph>
    {
        props.team.contributions.length === 0 ? 
            null :
            <ul style={{listStyle: "disc inside"}}>
                {
                    props.team.contributions.map((contribution, index) => <li key={index} style={{lineHeight: PARAGRAPH_LINE_HEIGHT, color: MAIN_THEME_LESS_EMPHASIS_COLOR, fontSize: 15}}>
                        <Text text={contribution} />
                    </li>)
                }
            </ul>
    }
</>;

function totalTime(from: Date, to: Date) {
    const totalMonths = (
        (to.getFullYear() - from.getFullYear()) * 12 +
        ((to.getMonth() + 1) - from.getMonth())
    );
    function plural(word: string, n: number) {
        return n === 1 ? word : `${word}s`;
    }
    if (totalMonths >= 12) {
        const years = Math.round((totalMonths / 12) * 10) / 10;
        return `${years} ${plural("year", years)}`;
    }
    return `${totalMonths} ${plural("month", totalMonths)}`
}

const DATE_SECTION_WIDTH = 125;
export const DatedExperience: React.FC<DatedExperienceInput> = props => <div style={{marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
    <div style={{width: DATE_SECTION_WIDTH, fontSize: MIN_FONT_SIZE}}>
        {
            Object.entries({
                at: props.employerName,
                ...(props.jobLocation ? {in: props.jobLocation} : {"": "Remotely"}),
                for: totalTime(props.start, props.end === "Present" ? new Date() : props.end),
                from: props.start,
                to: props.end,
            }).map(([k, v], index) => 
                <LabelItem
                    key={index}
                    first={index === 0}
                    labelName={k}
                    labelValue={formatLabelValue(v)}
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
