import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>

      {transactions.length === 0 ? (
        <h4 className="empty">No transactions yet 🚀</h4>
      ) : (
        <ul className="list">
          {transactions.map((transactions) => (
            <Transaction key={transactions.id} transactions={transactions} />
          ))}
        </ul>
      )}
    </>
  );
};
