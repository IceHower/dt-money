import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    
    const [type, setType] = useState('deposit');

    //estados dos inputs
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');


    function cleanStates() {
        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');
    }
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const transaction = {
            title,
            value,
            type,
            category
        }
        await createTransaction(transaction);

        onRequestClose();
        cleanStates();
    }



    return(
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}  
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                <button 
                onClick={onRequestClose} 
                className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal"/>
                </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar Transação</h2>
                    <input 
                    type="text" 
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />

                    <input 
                    type="number" 
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    />

                    <TransactionTypeContainer>
                        <RadioBox
                         type="button"
                         isActive={type === 'deposit'}
                         activeColor='#33CC95'
                         onClick={() => { setType('deposit') }}
                        >
                            <img src={entradaImg} alt="Entrada"/>
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                         isActive={type === 'withdraw'}
                         activeColor='#E62E4D'
                         type="button"
                         onClick={() => { setType('withdraw') }}
                        >
                            <img src={saidaImg} alt="Saida"/>
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <input 
                    type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
    )
}