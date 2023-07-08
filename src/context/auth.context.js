import { createContext, useContext, useEffect, useState } from "react";
import users from "src/data/user/users";
import { useLogin } from "src/services/auth.services";
import { getLocalToken, setTokenLocal } from "src/utils/storage.utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { _login, token } = useLogin();
  const [activeUser, setActiveUser] = useState(getActiveUser());

  useEffect(() => {
    if (token) setTokenLocal(token);
  }, [token]);

  function login(username, password) {
    const user = { username, password };
    _login(user);
    // setActiveUser(validUser);
    // localStorage.setItem("user", JSON.stringify(validUser));
    // return validUser;
  }

  function getActiveUser() {
    const token = getLocalToken();
    if (token) return users[0]; // TODO: fetch authenticated user

    return null;
  }

  function logout() {
    setActiveUser(null);
    return localStorage.clear();
  }

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
