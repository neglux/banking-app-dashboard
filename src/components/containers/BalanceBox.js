import React, { useEffect } from "react";
import bank from "../../data/bank";
import { useGlobalContext } from "../../context/context";

const BalanceBox = () => {
  const { balance, calcBalance, userMovements } = useGlobalContext();
  useEffect(() => {
    calcBalance(userMovements);
  }, [userMovements]);

  return (
    <li className="my-auto mx-auto px-5 font-bold text-xl">
      {parseFloat(balance).toFixed(2)}&nbsp;
      {bank.defaultCurrency}
    </li>
  );
};

export default BalanceBox;
