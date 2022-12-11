import React from 'react';
import { _Newsletter } from './Newsletter.styles';

export interface INewsletter {
    title: string;
    description?: string;
}

export const Newsletter = (props: INewsletter) => {
    const { title, description } = props;
    const [ email, setEmail ] = React.useState('');

    const subscribe = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log('subscribe via axios: ' + email);
    }


    return (
        <_Newsletter>
            <h2>{ title }</h2>
            <p>{ description }</p>

            <form onSubmit={subscribe}>
                <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit"></button>
            </form>
        </_Newsletter>
    );
}