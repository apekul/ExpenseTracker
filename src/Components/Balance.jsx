import React, { useContext } from "react";
import {
  Container,
  GroupBalance,
} from "../GlobalComponents/GlobalStyleCoponents";
import { GlobalContext } from "../GlobalComponents/context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <Container>
        <GroupBalance>
          <h4>Your Balance</h4>
          <h1>{total}PLN</h1>
        </GroupBalance>
      </Container>
    </>
  );
};
