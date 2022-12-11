import React from 'react';
import { _InfoBlock } from './Info.styles';

export interface IInfoBlock {
    position: number;
    title: string;
    description: string;
}

export const InfoBlock = (props: IInfoBlock) => {
    const { position, title, description } = props;

    return (
        <_InfoBlock>
            <div className="position">{ position }</div>
            <h3>{ title }</h3>
            <p>{ description }</p>
        </_InfoBlock>
    );
}