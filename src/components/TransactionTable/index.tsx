import { Container } from './styles';


export function TransactionTable() {
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
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$2.000</td>
                        <td>Casa</td>
                        <td>12/02/2021</td>
                    </tr>
                    <tr>
                        <td>Venda Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/02/2021</td>
                    </tr>
                    <tr>
                        <td>Venda Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}