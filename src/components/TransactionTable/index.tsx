import { useState, useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transaction {
    id: string;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
}


export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    console.log(transactions)
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                    return(
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.value)}</td>
                            <td>{transaction.category}</td>
                            <td>{Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </Container>
    )
}