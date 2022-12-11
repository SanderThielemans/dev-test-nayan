import styled from 'styled-components';

export const _Info = styled.div`
    display: flex;
    grid-gap: 3rem;
    max-width: 1024px;
    margin: 2rem auto;
`


export const _InfoBlock = styled.div`
    width: calc(100% / 3);

    .position {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem auto 2rem;
        width: clamp(2.5rem, 4vw, 4rem);
        font-size: clamp(0.9rem, 1.8vw, 1.8rem);
        aspect-ratio: 1/1;
        border-radius: 50%;
        font-weight: bold;
        color: #000000;
        background-color: #e6e6e6;
    }
`
