import React from 'react';
import axios from 'axios';
import { _Newsletter } from './Newsletter.styles';

export interface INewsletter {
    title: string;
    description?: string;
}

const NEWSLETTER_URL = 'http://localhost:8080/api/newsletter';


export const Newsletter = (props: INewsletter) => {
    const { title, description } = props;
    const [ subscribing, setSubscribing ] = React.useState(false);
    const [ subscribed, setSubscribed ] = React.useState(false);
    const [ error, setError ] = React.useState(false);
    const [ email, setEmail ] = React.useState('');

    const subscribe = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log('subscribe via axios: ' + email);

        setError(false);
        setSubscribing(true);
        axios.post(NEWSLETTER_URL, {
            amailAddress: email
        })
        .then(function (response) {
            setSubscribed(response.data.success);
            setError(!response.data.success);
            setSubscribing(false);
        })
        .catch(function (error) {
            console.log(error);
            setError(true);
            setSubscribing(false);
        });
    }


    return (
        <_Newsletter>
            <h2>{ title }</h2>
            <p>{ description }</p>

            {!subscribed && <form onSubmit={subscribe}>
                <input type="text" placeholder='Enter your email' value={email} disabled={subscribing} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" disabled={subscribing}></button>
            </form>}

            {error && <p className="error">Oeps. An error has occured while subscribing.</p>}

            {subscribed && <div>
                <h3>Thank you for you subscription</h3>
            </div>}
        </_Newsletter>
    );
}