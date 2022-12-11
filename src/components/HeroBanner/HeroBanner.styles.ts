import styled from 'styled-components';

export const _HeroBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    min-height: 70vh;
    padding: 10rem 3rem;
    box-sizing: border-box;

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 840px;
        width: max-content;
        text-align: center;
        line-height: 100%;
        
        span {
            text-align: center;
            display: block;
            max-width: 840px;
            width: max-content;
            font-size: clamp(2rem, 5vw, 5.35rem);
            line-height: 100%;
        }
    }
`
