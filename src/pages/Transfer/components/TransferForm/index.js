import Button from "../../../../components/Inputs/Button";
import Input from "../../../../components/Inputs/Input";

import users from "../../../../data/user/users";

import { useAuthContext } from "../../../../context/auth.context";
import { FormProvider, useForm } from "react-hook-form";

const TransferForm = () => {
  const { activeUser } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sender: `${activeUser.firstName} ${activeUser.lastName}`,
      date: new Date().toDateString(),
      amount: 0,
      currency: "USD",
      fee: 0.0,
    },
  });

  const handleTransfer = handleSubmit((values) => {});

  const handleFilter = (user) => user.id !== activeUser.id;

  const handleMap = (user) => `${user.firstName} ${user.lastName}`;

  return (
    <form className="ml-40 my-20" onSubmit={handleTransfer}>
      <FormProvider control={control} errors={errors}>
        <Input label="sender" disabled required />
        <Input
          type="select"
          label="receiver"
          data={users.filter(handleFilter).map(handleMap)}
          required
        />
        <div className="flex items-center">
          <Input type="currency" label="amount" required />
        </div>
        <div className="flex items-center">
          <Input label="date" disabled required />
          <Input label="fee" disabled required />
        </div>
        <Button type="submit" text="Send" />
      </FormProvider>
    </form>
  );
};

export default TransferForm;
