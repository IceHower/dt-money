import { Container, Content } from './styles';
import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Dashboard() {

    useEffect(() => {
        api('http://localhost:3000/api/transaction')
        .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}