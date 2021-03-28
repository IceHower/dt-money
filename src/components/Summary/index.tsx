import { Container } from './styles';
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {

    const { transactions } = useTransactions();

    const totalDeposit = transactions.reduce((accumulator, transaction) => {
        if(transaction.type === 'deposit') {
            return accumulator + transaction.value
        }
            return accumulator
    }, 0)

    const totalWithdraw = transactions.reduce((accumulator, transaction) => {
        if(transaction.type === 'withdraw') {
            return accumulator + transaction.value
        }
            return accumulator
    }, 0)

    const totalValue = totalDeposit - totalWithdraw;

    const summary = transactions.reduce((accumulator, transaction) => {
        if(transaction.type === 'deposit') {
            accumulator.deposits += transaction.value;
            accumulator.totals += transaction.value;
        } else {
            accumulator.withdraws += transaction.value;
            accumulator.totals -= transaction.value;
        }

        return accumulator;
    }, 
    {
        deposits: 0,
        withdraws: 0,
        totals: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="entradas"/>
                </header>
                <strong>
                    {Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'}).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="saidas"/>
                </header>
                <strong>
                    {Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'}).format(summary.withdraws)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={total} alt="total"/>
                </header>
                <strong>
                    {Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'}).format(summary.totals)}
                    </strong>
            </div>
        </Container>
    )
}