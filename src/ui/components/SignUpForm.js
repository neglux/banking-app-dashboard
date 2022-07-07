import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Button from "./Button";
import Container from "./Container";
import InputBox from "./InputBox";

const SignUpForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login, setDialog } = useGlobalContext();
  return (
    <section className="text-center">
      <h3 className="mb-10 text-xl">Welcome</h3>
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
              text: "successfully logged in",
            });
          }}
        />
        <div className="mx-auto my-2 w-11/12 h-[1px] bg-gray-900 rounded-full"></div>
        <Button text="Sign Up" />
      </div>
    </section>
  );
};

export default SignUpForm;
