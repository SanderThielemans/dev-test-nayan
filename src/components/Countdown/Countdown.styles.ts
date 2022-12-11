import styled from 'styled-components';


export const _CountdownBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    min-width: 3.5rem;
    max-width: 6rem;
    width: 5vw;

    .label,
    .value {
        text-transform: uppercase;
    }

    .value {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1/1;
        width: 100%;
        font-weight: 700;
        font-size: clamp(0.8rem, 3.2vw, 1.8rem);
        color: black;
        background: white;
        padding: 0.35rem;
        box-sizing: border-box;
    }
    
    .label {
        margin-top: clamp(0.5rem, 0.75vw, 1rem);
        font-weight: 700;
        font-size: clamp(0.6rem, 1.4vw, 1.2rem);
    }
`

export const _Countdown = styled.div`
    display: flex;
    flex-direction: row;

    ${_CountdownBlock} {
        margin: 0.5rem;
    }
`