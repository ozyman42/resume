import * as React from 'react';
import { MAIN_THEME_COLOR, MAIN_THEME_CONSTRAST_COLOR, MIN_FONT_SIZE } from '../themes';
import { Text } from '../Text';

const SPACING = '5px'

const SKILL_STYLE = {
    margin: `0 ${SPACING} ${SPACING} 0`,
    backgroundColor: MAIN_THEME_COLOR, color: MAIN_THEME_CONSTRAST_COLOR,
    display: 'inline-block',
    padding: SPACING,
    borderRadius: 10,
    fontSize: MIN_FONT_SIZE,
    verticalAlign: 'middle'
}

export const SkillList: React.FC<{skills: string[]}> = props => <div>
    {
        props.skills.map((skill, index) => 
        <span key={index} style={SKILL_STYLE}>
            <Text text={skill.split(" ").join('\u00A0')} splitBy={'\u00A0'} />
        </span>)
    }
</div>