import * as React from 'react';
import { MAIN_THEME_LEAST_EMPHASIS_COLOR } from '../themes';
import { MainSectionHeader } from './MainSectionHeader';

export const MainSection: React.FC<{header?: string, children: React.ReactNode}> = props => <div style={{color: MAIN_THEME_LEAST_EMPHASIS_COLOR}}>
    {props.header && <MainSectionHeader header={props.header} />}
    {props.children}
</div>;