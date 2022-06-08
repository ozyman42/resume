import * as React from 'react';
import { MAIN_CONTENT_DIVIDER_COLOR, MAIN_THEME_EMPHASIS_COLOR } from '../themes';

export const MainSectionHeader: React.FC<{header: string}> = props => <div style={{marginBottom: 10}}>
    <p style={{fontSize: 18, color: MAIN_THEME_EMPHASIS_COLOR, fontWeight: 700}} >{props.header}</p>
    <div style={{height: 1, width: '100%', backgroundColor: MAIN_CONTENT_DIVIDER_COLOR, marginTop: 2}} />
</div>;