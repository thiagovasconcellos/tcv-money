import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';


import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [transactionType, setTransactionType] = useState('credit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type: transactionType
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setTransactionType('credit');
    onRequestClose();
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeSvg} alt="close modal"></img>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={() => { setTransactionType('credit') }}
            isActive={transactionType === 'credit'}
            activeColor="green"
          >
            <img src={incomeSvg} alt="income" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button' 
            onClick={() => { setTransactionType('withdraw') }}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="outcome" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
};
