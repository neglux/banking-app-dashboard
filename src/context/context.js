import React, { useContext, useMemo, useReducer, useState } from "react";
import reducer from "../hooks/reducer";

import users from "../data/user/users";
import movements from "../data/user/movements";
import bank from "../data/bank";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userMovements: [],
    balance: 0,
  });

  const [cookieState, setCookieState] = useState("default");

  const showCookieDialog = useMemo(() => {
    const acceptance = localStorage.getItem("cookie-acceptance");
    console.log(acceptance);
    if (acceptance) return false;

    return true;
  }, [cookieState]);

  function handleCookieAcceptance(preference) {
    localStorage.setItem("cookie-acceptance", JSON.stringify(preference));
    setCookieState("changed");
  }

  function findUserByFullName(name) {
    return users.find((user) => `${user.firstName} ${user.lastName}` === name);
  }

  function findMovements(user) {
    return movements.find((movement) => user.movementId === movement.id);
  }

  function setMovements(user) {
    dispatch({
      type: "SET_MOVS",
      payload: { userMovements: findMovements(user).movements },
    });
  }

  function addMovement(movement, user) {
    findMovements(user).movements.push(movement);
    if (movement.type !== "loan") mirrorMovement(movement);
  }

  function mirrorMovement(movement) {
    const copyMovement = { ...movement };
    copyMovement.type = "deposit";
    const receiver = findUserByFullName(movement.receiver);
    findMovements(receiver).movements.push(copyMovement);
  }

  function createMovement(sender, receiver, amount, currency, type, date) {
    return {
      sender: `${sender?.firstName} ${sender?.lastName}`,
      receiver,
      amount: parseInt(amount),
      currency,
      type: type,
      date: date,
    };
  }

  function calcBalance(movements) {
    const { balance, currency } = movements.reduce(
      (acc, item) => {
        let convertedAmount = item.amount;
        if (acc.currency !== item.currency) {
          convertedAmount = bank.rates[acc.currency] * item.amount;
        }
        return {
          balance:
            item.type === "withdrawal"
              ? acc.balance - convertedAmount
              : acc.balance + convertedAmount,
          currency: acc.currency,
        };
      },
      {
        balance: 0,
        currency: "USD",
      }
    );
    dispatch({
      type: "CALC_BAL",
      payload: { balance: `${balance} ${currency}` },
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        showCookieDialog,
        handleCookieAcceptance,
        setMovements,
        addMovement,
        calcBalance,
        createMovement,
        findUserByFullName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
