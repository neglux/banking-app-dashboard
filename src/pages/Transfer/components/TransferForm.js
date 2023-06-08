import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import Input from "src/components/common/Input";
import { useAuthContext } from "src/context/auth.context";
import { FormProvider } from "src/context/form.context";
import bank from "src/data/bank";
import users from "src/data/user/users";

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
        <Input name="sender" label="Sender" disabled required />
        <Input
          type="select"
          name="receiver"
          label="Receiver"
          placeholder="Choose One"
          data={users.filter(handleFilter).map(handleMap)}
          required
        />
        <div className="flex items-center">
          <Input
            name="amount"
            label="Amount"
            type="number"
            units={bank.currencies}
            required
          />
        </div>
        <div className="flex items-center">
          <Input name="date" label="Date" disabled required />
          <Input name="fee" label="Fee" disabled required />
        </div>
        <Button type="submit" text="Send" />
      </FormProvider>
    </form>
  );
};

export default TransferForm;
