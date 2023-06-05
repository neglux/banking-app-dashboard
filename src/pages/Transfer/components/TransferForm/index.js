import React, { useState } from "react";
import Dropdown from "../../../../components/Inputs/Dropdown";
import Button from "../../../../components/Inputs/Button";
import Input from "../../../../components/Inputs/Input";

import strings from "../../../../data/strings";
import bank from "../../../../data/bank";
import users from "../../../../data/user/users";

import { useGlobalContext } from "../../../../context/context";
import { useAuthContext } from "../../../../context/auth.context";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";

const TransferForm = () => {
  const {
    form: {
      senderLabelText,
      receiverLabelText,
      amountLabelText,
      dateLabelText,
      feeLabelText,
      sendBtn,
    },
  } = strings.transfer;
  const { transferSuccess, transferFail } = strings.dialogs;
  const [receiver, setReceiver] = useState();
  const { addMovement, findUserByFullName, balance, createMovement } =
    useGlobalContext();

  const { activeUser } = useAuthContext();

  function isValidTransfer(movement) {
    const isValidSender = (sender) =>
      sender && activeUser === findUserByFullName(sender);
    const isValidReceiver = (receiver) =>
      receiver && activeUser !== findUserByFullName(receiver);
    const isValidAmount = (amount) => amount > 0 && amount < parseInt(balance);
    const isValidCurrency = (currency) =>
      currency && bank.currencies.includes(currency);

    if (!activeUser) return false;
    if (!isValidSender(movement.sender)) return false;
    if (!isValidReceiver(movement.receiver)) return false;
    if (!isValidAmount(movement.amount)) return false;
    if (!isValidCurrency(movement.currency)) return false;
    return true;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTransfer = handleSubmit((values) => {
    const movement = createMovement(
      values.activeUser,
      values.receiver,
      values.amount,
      values.currency,
      "withdrawal",
      new Date().toISOString()
    );
    if (isValidTransfer(movement)) {
      addMovement(movement, activeUser);
      toast.success(transferSuccess);
    } else {
      toast.warning(transferFail);
    }
  });

  const handleFilter = (user) => {
    return user.id !== activeUser.id;
  };

  const handleMap = (user) => `${user.firstName} ${user.lastName}`;

  return (
    <form className="ml-40 my-20" onSubmit={handleTransfer}>
      <FormProvider control={control} errors={errors}>
        <Input label={senderLabelText} disabled />
        <Dropdown
          label={receiverLabelText}
          data={users.filter(handleFilter).map(handleMap)}
          handleSelect={setReceiver}
        />
        <div className="flex items-center">
          <Input label={amountLabelText} type="currency" />
        </div>
        <div className="flex items-center">
          <Input label={dateLabelText} disabled />
          <Input label={feeLabelText} disabled />
        </div>
        <Button text={sendBtn} />
      </FormProvider>
    </form>
  );
};

export default TransferForm;
