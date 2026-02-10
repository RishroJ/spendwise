import React, { createContext, useReducer,useEffect } from "react";
import AppReducer from "./AppReducer";

const localData = JSON.parse(localStorage.getItem("transactions"));

const initialState = {
  transactions: localData||[],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(state.transactions)
    );
  }, [state.transactions]);

  //Actions
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    });
  }

   function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
