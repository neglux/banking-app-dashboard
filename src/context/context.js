import React, { useContext, useReducer } from "react";
import reducer from "../hooks/reducer";

import Dashboard from "../pages/Dashboard";
import Transfer from "../pages/Transfer";
import Loan from "../pages/Loan";

import users from "../data/user/users";
import movements from "../data/user/movements";
import bank from "../data/bank";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    activeModuleIx: 0,
    modules: [<Dashboard />, <Transfer />, <Loan />],
    activerUser: null,
    userMovements: [],
    balance: 0,
    dialog: {},
  });

  function setActiveModuleIx(id) {
    dispatch({ type: "SET_ACT_IX", payload: { id } });
  }

  function login(username, password) {
    const validUser = users.find(
      (user) => user?.username === username && user?.password === password
    );
    if (validUser) {
      setActiveUser(validUser.id);
      setMovements(validUser);
    }
  }

  function findUserByID(id) {
    return users.find((user) => user.id === id);
  }

  function findUserByFullName(name) {
    return users.find((user) => `${user.firstName} ${user.lastName}` === name);
  }

  function setActiveUser(id) {
    const user = findUserByID(id);
    dispatch({ type: "SET_ACT_USER", payload: { user } });
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

  function setDialog(dialog) {
    dispatch({ type: "SET_DLOG", payload: { dialog } });
  }

  function logout() {
    dispatch({ type: "LOG_OUT" });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setActiveModuleIx,
        login,
        setMovements,
        addMovement,
        calcBalance,
        setDialog,
        createMovement,
        logout,
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
