import React from "react";
import Container from "../../../../components/containers/Container";
import Button from "../../../../components/Inputs/Button";
import Input from "../../../../components/Inputs/Input";
import strings from "../../../../data/strings";
import { useAuthContext } from "../../../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";

const LogInForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { loginSuccess, LOGIN_FAIL } = strings.dialogs;
  const { loginMsg, loginBtnText } = strings.loginForm;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = handleSubmit((data) => {
    const user = login(data.username, data.password);
    if (!user) return toast.warning(LOGIN_FAIL);

    navigate("/");
    return toast.success(loginSuccess);
  });

  return (
    <form className="text-center" onSubmit={handleLogin}>
      <div className="mx-20">
        <h3 className="text-xl capitalize font-semibold tracking-wide">
          {loginMsg}
        </h3>
        <FormProvider control={control} errors={errors}>
          <Input label="username" required />
          <Input label="password" type="password" required />
        </FormProvider>
        <div className="flex flex-col">
          <Button type="submit" text={loginBtnText} />
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
