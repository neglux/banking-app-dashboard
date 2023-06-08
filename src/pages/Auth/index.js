import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Head from "src/components/common/Head";
import Background from "src/pages/Auth/components/Background";

const Auth = () => {
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
