import React from 'react';
import { _HeroBanner } from './HeroBanner.styles';

export interface IHeroBanner {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export const HeroBanner = (props: IHeroBanner) => {
    const { title, subtitle, children } = props;

    return (
        <_HeroBanner>
            <h1>{ title } <span>{ subtitle }</span></h1>

            { children }
        </_HeroBanner>
    );
}