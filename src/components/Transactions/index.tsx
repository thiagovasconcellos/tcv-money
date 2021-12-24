import { MdDeleteForever } from 'react-icons/md';

import { useTransactions } from "../../hooks/useTransactions";
import { Container, DeleteButton } from "./styles";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <DeleteButton type="button" onClick={() => deleteTransaction(transaction.id)}>
                  <MdDeleteForever size={32} />
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}