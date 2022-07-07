import React, { useContext, useReducer } from "react";
import reducer from "../reducer";

import Dashboard from "../ui/modules/Dashboard";
import Transfer from "../ui/modules/Transfer";
import Loan from "../ui/modules/Loan";
import Options from "../ui/modules/Options";

import users from "../data/users";
import movements from "../data/movements";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    activeModuleIx: 0,
    modules: [<Dashboard />, <Transfer />, <Loan />, <Options />],
    activerUser: null,
    userMovements: [],
    balance: 0,
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
    mirrorMovement(movement);
  }

  function mirrorMovement(movement) {
    const copyMovement = { ...movement };
    copyMovement.type = "deposit";
    const receiver = findUserByFullName(movement.receiver);
    findMovements(receiver).movements.push(copyMovement);
  }

  function calcBalance(movements) {
    const { balance, currency } = movements.reduce(
      (acc, item) => {
        return {
          balance:
            item.type === "withdrawal"
              ? acc.balance - item.amount
              : acc.balance + item.amount,
          currency: item.currency,
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
        logout,
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
