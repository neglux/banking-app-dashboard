import React from "react";
import bank from "../../../../data/bank";

const BalanceBox = () => {
  return (
    <li className="my-auto mx-auto px-5 font-bold text-xl">
      {parseFloat(0).toFixed(2)}&nbsp;
      {bank.defaultCurrency}
    </li>
  );
};

export default BalanceBox;
