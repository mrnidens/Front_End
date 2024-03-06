import React from "react";
import { useSelector } from "react-redux";
import { Balance as BalanceSelector, RootState } from "../utils/types";

const Balance = () => {
  const balance = useSelector<RootState, BalanceSelector>(state => state.balance)

  return (
    <div>
      <h1>Iron Bank of Braavos</h1>
      <h2>Balance = {balance.toString()}</h2>
    </div>
  )
}

export default Balance