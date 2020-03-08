import * as React from 'react';
import { MainSectionHeader } from './MainSectionHeader';

export const MainSection: React.FC<{header: string}> = props => <div>
    <MainSectionHeader header={props.header} />
    {props.children}
    <div style={{height: 10}}/>
</div>;