import Layout from "../../components/containers/Layout";
import LoginForm from "./components/LoginForm";
import vault from "../../assets/vault.svg";

const Login = () => {
  return (
    <Layout>
      <div className="flex">
        <div>
          <LoginForm />
          <footer className="flex w-fit mx-auto h-fit mt-20 font-semibold text-sm text-slate-600">
            <p>
              designed by&nbsp;
              <a
                href="https://github.com/neglux"
                target="_blank"
                className="text-slate-900"
                rel="noreferrer"
              >
                neglux
              </a>
            </p>
          </footer>
        </div>
        <aside>
          <img
            className="h-[450px] rounded-r-2xl object-cover"
            src={vault}
            alt="vault"
          />
        </aside>
      </div>
    </Layout>
  );
};

export default Login;
