import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin:0 auto;
    padding: 2rem 1rem 12rem; // 2rem top, 1rem ˜= 16px left and right, 10rem ˜= 160px bottom
    display: flex;
    align-items: center; // alinha verticalmente ao centro
    justify-content: space-between; //para ter um espaço entre os elementos

    button {
        font-size: 1rem;
        font-weight: 600;
        width: 11.8rem;
        height: 3rem;
        background: var(--blue-light);
        color: var(--shape);
        border-radius: 0.25rem;
        border: 0;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9); //aplica um brightness de 0.9, o que vai escurecer o botao um pouco
        }
    }
`;