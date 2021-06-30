import * as React from 'react';
import { SIDEBAR_DIVIDER_COLOR } from '../themes';
import {Text} from '../Text';

export const SidebarSection: React.FC<{header?: string}> = props => <div style={{marginBottom: 5}}>
    {
        props.header === undefined ? null :
        <div style={{marginBottom:5}}>
            <div style={{fontSize:18}}><Text text={props.header} /></div>
            <div style={{height:2,width:'100%',backgroundColor:SIDEBAR_DIVIDER_COLOR}}></div>
        </div>
    }
    {props.children}
</div>;