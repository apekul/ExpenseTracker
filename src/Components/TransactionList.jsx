import React, {useContext} from 'react'
import { GlobalContext } from '../GlobalComponents/context/GlobalState'
import { TransactionGroup } from '../GlobalComponents/GlobalStyleCoponents'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  
  return (
    <TransactionGroup>
        <h3>History</h3>
        <ul className="list">
          {transactions.length == 0 ? '...' : transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))
          }
        </ul>
    </TransactionGroup>
  )
}
