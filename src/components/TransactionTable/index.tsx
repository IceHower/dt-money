import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';




export function TransactionTable() {
    const {transactions} = useTransactions();

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