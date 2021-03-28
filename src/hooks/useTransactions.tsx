import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: string;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}
// Posso fazer dessa forma tradicional a tipagem do campo de cadastro
// interface CreateNewTransactionProps {
//     title: string;
//     value: number;
//     category: string;
//     type: string;
// }

interface TransactionProviderData {
        createTransaction: (Transaction: TransactionInput) => Promise<void>; // Toda função assincrona retorna uma promise
        transactions: Transaction[];
}
//ou como so n iremos utilizar o createdAt e id da Interface de transaction podemos fazer da seguinte forma
type TransactionInput = Omit<Transaction, 'id' |'createdAt'> //Esse type Omit, vai herdar toda a interface de Transaction porem nao ira utilizar os campos id e createdAt

// Como nao podemos passar um objeto vazio no typescript que ele ira dar erro, devemos dizer que ele e do tipo TransactionProviderData que criamos para poder passar mais de um valor no Context
export const TransactionsContext = createContext<TransactionProviderData>({} as TransactionProviderData);

// Para o codigo nao ficar muito grande e cheio de funcoes no app.tsx, vamos exportar um componente chamado TransactionsProvider que irá armazenar essas funcoes e estados
// E dentro dele vamos retornar o provider, e depois importamos esse componente no app.tsx
export function TransactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('http://localhost:3000/api/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;
        setTransactions([...transactions, transaction])

    }

    


    return (/** Como aqui nao podemos dar o retorno direto so passando virgula, e em array tambem nao seria legal pois as posiçoes no array nao tem nome, passamos em um objeto javascript 
            por isso a {} dentro do value, passamos o array de transactions e a funçao createTransaction
            */
        <TransactionsContext.Provider value={{transactions, createTransaction}}> 
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}