import * as React from 'react';
import { EXPERIENCE_TITLE_FONT_SIZE } from '../themes';

export const ExperienceTitle: React.FC<{}> = props => <b style={{fontSize: EXPERIENCE_TITLE_FONT_SIZE, marginTop: -3, display: 'block'}}>
    {props.children}
</b>