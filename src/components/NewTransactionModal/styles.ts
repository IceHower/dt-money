import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1.5rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        margin-top: 1.5rem;
        background: var(--green);
        border: none;
        height: 4rem;
        font-weight: 600;
        font-size: 1rem;
        color: var(--shape);
        border-radius: 0.25rem;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div `
    display: flex;
    margin: 1.5rem 0;
    justify-content: space-between;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
        display: flex;
        height: 4rem;
        width: 49%;
        align-items: center;
        justify-content: center;
        border: 1.5px solid #D7D7D7;
        border-radius: 0.25rem;
        background: ${props => props.isActive ? transparentize(0.9, props.activeColor) : 'transparent'};
        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')}
        }
        img {
            width: 20px;
            height: 20px;
            margin-right: 1.15rem;
        }
        span {
            color: var(--text-title);
            font-size: 1rem;
            font-weight: 400;
            line-height: 2px;
        }
`;