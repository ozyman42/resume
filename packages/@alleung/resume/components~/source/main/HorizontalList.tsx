import * as React from 'react';
import { MIN_FONT_SIZE } from '../themes';
import { Text } from '../Text';

export const CircleSeparator: React.FC<{}> = props => <span style={{
    width: 5, height: 5,
    borderRadius: 30,
    display: "inline-block",
    verticalAlign: 'middle',
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: 'black'}}>
</span>

export const HorizontalList: React.FC<{items: string[]}> = props => <>
    {
        props.items.length === 0 ? null :
        props.items.map((item, index) => <span key={index}>
            {index > 0 ? <CircleSeparator /> : null}
            <span style={{fontSize: MIN_FONT_SIZE}}>
                <Text text={item} />
            </span>
        </span>)
    }
</>;