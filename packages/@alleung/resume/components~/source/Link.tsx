import * as React from 'react';

export const Link: React.FC<{to: string, text: string}> = props => <a style={{textDecoration:'none', color: 'blue'}} href={props.to}>
    {props.text}
</a>;