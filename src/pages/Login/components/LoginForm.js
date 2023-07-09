import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAuthContext } from "src/context/auth.context";
import Button from "src/components/common/Button";
import Input from "src/components/common/Input";
import { FormProvider } from "src/context/form.context";

const LogInForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = handleSubmit(async (data) => {
    const isSuccess = await login(data.username, data.password);
    if (!isSuccess) return toast.warning("");

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
            <Input name="username" placeholder="Username" required />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              required
            />
          </div>
        </FormProvider>
        <Button type="submit" text="Login" />
        <div className="w-fit text-sm mx-auto mt-8">
          Don't have an account?{" "}
          <a className="font-semibold" href="#">
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
