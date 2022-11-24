import React, { useContext } from "react";
import { Div, Group } from "../GlobalComponents/GlobalStyleCoponents";
import { GlobalContext } from "../GlobalComponents/context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);

  const income = amounts
    .filter((i) => i > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((i) => i < 0)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <Div>
      <Group>
        <h4>Income</h4>
        <p className="money-plus">{income}</p>
      </Group>
      <Group>
        <h4>Expense</h4>
        <p className="money-minus">{Math.abs(expense)}</p>
      </Group>
    </Div>
  );
};
