import { createContext, useContext, useState } from "react";
import { login, logout, getActiveUser } from "../helpers/auth.helper";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, _] = useState(getActiveUser());

  return (
    <AuthContext.Provider value={{ login, logout, activeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
