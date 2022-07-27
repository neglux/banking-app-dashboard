import React, { useState } from "react";
import Button from "../components/Button";
import Container from "../containers/Container";
import InputBox from "../components/InputBox";
import strings from "../../data/strings";
import vault from "../../assets/vault.svg";
import { useGlobalContext } from "../../context/context";

const LogInForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login, setDialog } = useGlobalContext();
  const { loginSuccess } = strings.dialogs;
  const { title } = strings.loginForm;
  return (
    <form
      className="text-center flex"
      action={() => {
        login(username, password);
        setUsername("");
        setPassword("");
        setDialog({
          isShown: true,
          type: "suc",
          text: loginSuccess,
        });
      }}
    >
      <div className="mx-20 ">
        <h3 className="mt-14 mb-10 text-xl capitalize font-semibold tracking-wide">
          {title}
        </h3>
        <Container style="h-fit px-5 py-5 bg-gray-400 mb-10">
          <InputBox
            type="text"
            placeholder="username"
            value={username}
            changeHandler={setUsername}
          />
          <InputBox
            type="password"
            placeholder="password"
            value={password}
            changeHandler={setPassword}
          />
        </Container>
        <div className="flex flex-col">
          <Button
            text="Log In"
            clickHandler={() => {
              login(username, password);
              setUsername("");
              setPassword("");
              setDialog({
                isShown: true,
                type: "suc",
                text: loginSuccess,
              });
            }}
          />
        </div>
        <footer className="flex w-fit mx-auto h-fit mt-20 font-semibold text-sm text-slate-600">
          <p>
            designed by&nbsp;
            <a
              href="https://github.com/neglux"
              target="_blank"
              className="text-slate-900"
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
          alt="vault image"
        />
      </aside>
    </form>
  );
};

export default LogInForm;
