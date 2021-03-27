import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { useState } from "react";
Modal.setAppElement('#root'); // Para questoes de acessibilidade  definimos para o componente do react-modal aonde nossa aplicação esta sendo executada.
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
       <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
       <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
       />
       <Dashboard/>
      
    </>
  );
}