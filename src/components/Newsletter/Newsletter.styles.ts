import styled from 'styled-components';

export const _Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    box-sizing: border-box;
    margin: 3rem auto;
    border-top: 1px solid #e6e6e6;
    max-width: 1024px;

    h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 840px;
        width: max-content;
        text-align: center;
        line-height: 100%;
    }

    p {
        margin-top: 0;
    }
    
    form {
        display: flex;
        flex-wrap: nowrap;
        max-width: 400px;
        height: 3.5rem;
        margin-top: 2rem;
        
        input {
            height: 100%;
            min-width: 250px;
            box-sizing: border-box;
            outline: 0;
            border: 0;
            padding: 1rem 1rem;
            font-size: clamp(0.8rem, 1vw, 1rem);
            background-color: #e6e6e6;
        }
        
        button[type='submit'] {
            display: block;
            background-color: #000000;
            outline: 0;
            border: 0;
            aspect-ratio: 1/1;
            height: 3.5rem;
            width: 3.5rem;
            box-sizing: border-box;
            cursor: pointer;

            &::after {
                content: '';
                display: block;
                margin: 0 auto;
                width: 0;
                height: 0px;
                border-top: 12px solid transparent;
                border-bottom: 12px solid transparent;
                border-left: 20px solid #FFFFFF;
                transition: transform 0.35s ease-in-out;
            }

            &:hover::after {
                transform: rotate(360deg);
            }
        }
    }

    p.error {
        color: red;
        margin-top: 1.35rem;
        font-size: 0.85rem;
        text-align: center;
    }
`
