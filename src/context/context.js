import React, { useContext, useReducer } from "react";
import reducer from "../reducer";

import Dashboard from "../ui/modules/Dashboard";
import Transfer from "../ui/modules/Transfer";
import Loan from "../ui/modules/Loan";
import Options from "../ui/modules/Options";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    activeModuleIx: 0,
    modules: [<Dashboard />, <Transfer />, <Loan />, <Options />],
  });

  function setActiveModuleIx(id) {
    dispatch({ type: "SET_ACT_IX", payload: { id } });
  }

  return (
    <AppContext.Provider value={{ ...state, setActiveModuleIx }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
