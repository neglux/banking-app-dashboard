import { createContext, useContext, useState } from "react";
import users from "../data/user/users";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(getActiveUser());

  function login(username, password) {
    const validUser = users.find(
      (user) => user?.username === username && user?.password === password
    );

    if (!validUser) return null;

    setActiveUser(validUser);
    localStorage.setItem("user", JSON.stringify(validUser));
    return validUser;
  }

  function getActiveUser() {
    return JSON.parse(localStorage.getItem("user")) || null;
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
