import * as React from 'react';

export const Link: React.FC<{to: string, text: string}> = props => <a style={{textDecoration:'none'}} href={props.to}>
    {props.text}
</a>;