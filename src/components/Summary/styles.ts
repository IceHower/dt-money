import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -6rem;

    div {
        background: var(--shape);
        color: var(--text-title);
        padding: 1.5rem 2rem;
        border-radius: 5px;
        strong {
            font-size: 3rem;
            font-weight: 400;
            line-height: 3rem
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
        &:last-child{
            background: var(--green);
            color: var(--shape);
        }
        
    }
    
`;