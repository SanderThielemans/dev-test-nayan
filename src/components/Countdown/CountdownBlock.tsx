import React from "react";
import { _CountdownBlock } from "./Countdown.styles";


export interface ICountdownBlock {
    label?: string;
    value: number;
}

export const CountdownBlock = (props: ICountdownBlock) => {
    const { label, value } = props;

    

    return (
        <_CountdownBlock>
            <div className="value">{ value > 9 ? value : `0${value}` }</div>
            <div className="label">{ label }</div>
        </_CountdownBlock>
    );
}