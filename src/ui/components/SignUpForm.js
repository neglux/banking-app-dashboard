import React from "react";
import Button from "./Button";
import Container from "./Container";
import InputBox from "./InputBox";

const SignUpForm = () => {
  return (
    <section className="text-center">
      <h3 className="mb-10 text-xl">Welcome</h3>
      <Container style="h-fit px-5 py-5 bg-gray-300 mb-10">
        <InputBox type="text" placeholder="username" />
        <InputBox type="password" placeholder="password" />
      </Container>
      <div className="flex flex-col">
        <Button text="Log In" />
        <div className="mx-auto my-2 w-11/12 h-[1px] bg-gray-900 rounded-full"></div>
        <Button text="Sign Up" />
      </div>
    </section>
  );
};

export default SignUpForm;
