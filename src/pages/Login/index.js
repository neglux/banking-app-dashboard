import DocumentHead from "../../components/DocumentHead";
import Background from "./components/Background";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <Background>
      <DocumentHead title="Login | Caspianbank" />
      <LoginForm />
    </Background>
  );
};

export default Login;
