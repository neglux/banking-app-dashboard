import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Head from "src/components/common/Head";
import Background from "src/components/layout/Background";
import { useAuthContext } from "src/context/auth.context";

const Auth = () => {
  const navigate = useNavigate();
  const { activeUser } = useAuthContext();

  useEffect(() => {
    if (activeUser) return navigate("/", { replace: true });
  }, [activeUser, navigate]);

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
