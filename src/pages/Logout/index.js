import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "src/context/auth.context";

const Logout = () => {
  const { activeUser, logout } = useAuthContext();

  useEffect(() => {
    if (activeUser) logout();
  }, []);

  if (!activeUser) return <Navigate to="/unavailable" replace />;

  return <Navigate to="/auth" replace />;
};

export default Logout;
