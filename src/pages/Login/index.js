import DocumentHead from "src/components/DocumentHead";
import Background from "./components/Background";
import LogInForm from "./components/LoginForm";

const Login = () => {
  return (
    <Background>
      <DocumentHead title="Login | Caspianbank" />
      <LogInForm />
    </Background>
  );
};

export default Login;
