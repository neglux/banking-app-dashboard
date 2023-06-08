import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "src/context/auth.context";

const Logout = () => {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
  }, []);

  return <Navigate to="/auth" replace />;
};

export default Logout;
