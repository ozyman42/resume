import * as React from 'react';
import { MainSectionHeader } from './MainSectionHeader';

export const MainSection: React.FC<{header: string}> = props => <>
    <MainSectionHeader header={props.header} />
    {props.children}
    <div style={{marginBottom:10}}/>
</>;