import Head from "src/components/common/Head";
import Background from "./components/Background";
import LogInForm from "./components/LoginForm";

const Login = () => {
  return (
    <Background>
      <Head title="Login | Caspianbank" />
      <LogInForm />
    </Background>
  );
};

export default Login;
