import * as React from 'react';
import { MAIN_CONTENT_DIVIDER_COLOR } from 'app/themes';

export const MainSectionHeader: React.FC<{header: string}> = props => <div style={{marginBottom: 10}}>
    <p style={{fontSize: 18}} >{props.header}</p>
    <div style={{height: 2, width: '100%', backgroundColor: MAIN_CONTENT_DIVIDER_COLOR}} />
</div>;