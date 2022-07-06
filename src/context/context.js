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

  function setActiveUser(id) {
    const user = users.find((user) => user.id === id);
    dispatch({ type: "SET_ACT_USER", payload: { user } });
  }

  function setMovements(user) {
    const userMovements = movements.find(
      (movement) => user.movementId === movement.id
    );
    dispatch({
      type: "SET_MOVS",
      payload: { userMovements: userMovements.movements },
    });
  }

  function calcBalance(movements) {
    const { balance, currency } = movements.reduce(
      (acc, item) => {
        return {
          balance: acc.balance + item.amount,
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
        setActiveUser,
        setMovements,
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
