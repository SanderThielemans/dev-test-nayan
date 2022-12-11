import React from 'react';
import { _Info } from './Info.styles';
import { InfoBlock } from './InfoBlock';

export interface IInfo {
    blocks: any[];
}

export const Info = (props: IInfo) => {
    const { blocks } = props;

    return (
        <_Info>
            {blocks.map((block, index) => {
                return (
                    <InfoBlock
                        key={index}
                        position={index + 1}
                        title={block.title}
                        description={block.description}
                    />
                );
            })}
        </_Info>
    );
}