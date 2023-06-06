import React from "react";
import Button from "../../../../components/Inputs/Button";
import Input from "../../../../components/Inputs/Input";
import { useAuthContext } from "../../../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";

const LogInForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = handleSubmit((data) => {
    const user = login(data.username, data.password);
    if (!user) return toast.warning("");

    navigate("/", { replace: true });
    return toast.success("");
  });

  return (
    <form onSubmit={handleLogin}>
      <div className="mx-10">
        <div className="mb-16">
          <h2>caspianbank</h2>
          <h3 className="text-md font-semibold tracking-wide">
            Login to get started
          </h3>
        </div>
        <FormProvider control={control} errors={errors}>
          <div className="flex flex-col gap-4 my-10 w-[250px]">
            <Input label="username" required />
            <Input label="password" type="password" required />
          </div>
        </FormProvider>
        <Button type="submit" text="Login" />
        <div className="w-fit text-sm mx-auto mt-8">
          Don't have an account?{" "}
          <a className="font-semibold" href="">
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
