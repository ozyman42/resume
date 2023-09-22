import * as React from 'react';
import { EXPERIENCE_TITLE_FONT_SIZE, MAIN_THEME_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR } from '../themes';

export const ExperienceTitle: React.FC<{children: React.ReactNode}> = props => 
<span style={{marginTop: -3, display: 'block', color: MAIN_THEME_EMPHASIS_COLOR}}>
    {props.children}
</span>