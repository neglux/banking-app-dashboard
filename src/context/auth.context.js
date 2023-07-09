import { createContext, useContext, useState } from "react";
import { _login } from "src/services/auth.services";
import { getLocalUser } from "src/utils/storage.utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(getActiveUser());

  async function login(username, password) {
    const payload = { username, password };

    const user = await _login(payload);
    if (!user) return false;

    setActiveUser(user);
    return true;
  }

  function getActiveUser() {
    const user = getLocalUser();
    if (user) return JSON.parse(user);

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
