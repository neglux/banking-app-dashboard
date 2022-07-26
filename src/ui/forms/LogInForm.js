import React, { useState } from "react";
import Button from "../components/Button";
import Container from "../containers/Container";
import InputBox from "../components/InputBox";
import strings from "../../data/strings";
import { useGlobalContext } from "../../context/context";

const LogInForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login, setDialog } = useGlobalContext();
  const { loginSuccess } = strings.dialogs;
  const { title } = strings.loginForm;
  return (
    <section className="text-center">
      <h3 className="mb-10 text-xl capitalize">{title}</h3>
      <Container style="h-fit px-5 py-5 bg-gray-300 mb-10">
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
    </section>
  );
};

export default LogInForm;
