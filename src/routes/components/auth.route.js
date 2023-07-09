import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Head from "src/components/common/Head";
import Background from "src/components/layout/Background";
import { useAuthContext } from "src/context/auth.context";

const Auth = () => {
  const location = useLocation();
  const { activeUser } = useAuthContext();

  if (activeUser && location.pathname !== "/auth/logout")
    return <Navigate to={"/"} replace />;

  return (
    <Background>
      <Head title="Auth | Caspianbank" />
      <Suspense fallback={<>loading</>}>
        <Outlet />
      </Suspense>
    </Background>
  );
};

export default Auth;
