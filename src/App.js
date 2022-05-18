import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './GlobalComponents/context/GlobalState';
import { Theme } from './GlobalComponents/GlobalStyleCoponents'

function App() {
  return (
    <GlobalProvider>
      <Theme>
        <Header />
        <div>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </Theme>
    </GlobalProvider>
  );
}

export default App;
