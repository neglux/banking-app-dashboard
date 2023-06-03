import React, { useState } from "react";
import Dropdown from "../../../../components/Inputs/Dropdown";
import LabelInput from "../../../../components/Inputs/LabelInput";
import LabelTextBox from "../../../../components/containers/LabelTextBox";
import Button from "../../../../components/Inputs/Button";

import strings from "../../../../data/strings";
import bank from "../../../../data/bank";
import users from "../../../../data/user/users";

import { useGlobalContext } from "../../../../context/context";
import { useAuthContext } from "../../../../context/auth.context";
import { toast } from "react-toastify";

const TransferForm = () => {
  const {
    form: {
      senderLabelText,
      receiverLabelText,
      amountLabelText,
      currencyLabelText,
      dateLabelText,
      feeLabelText,
      sendBtn,
    },
  } = strings.transfer;
  const { transferSuccess, transferFail } = strings.dialogs;
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const { addMovement, findUserByFullName, balance, createMovement } =
    useGlobalContext();

  const { activeUser } = useAuthContext();

  function getNames(data) {
    return data.map((item) => {
      if (!isActiveUser(item)) return `${item?.firstName} ${item?.lastName}`;

      return ``;
    });
  }

  function isActiveUser(user) {
    return activeUser === user;
  }

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

  return (
    <form
      className="ml-40 my-20"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <LabelTextBox
        label={senderLabelText}
        text={`${activeUser.firstName} ${activeUser.lastName}`}
      />
      <Dropdown
        label={receiverLabelText}
        data={getNames(users)}
        selectHandler={setReceiver}
      />
      <div className="flex items-center">
        <LabelInput
          label={amountLabelText}
          value={amount}
          changeHandler={setAmount}
        />
        <Dropdown
          label={currencyLabelText}
          data={bank.currencies}
          selectHandler={setCurrency}
        />
      </div>
      <div className="flex items-center">
        <LabelTextBox label={dateLabelText} text={new Date().toDateString()} />
        <LabelTextBox label={feeLabelText} text={"$0.00"} />
      </div>
      <Button
        text={sendBtn}
        clickHandler={() => {
          const movement = createMovement(
            activeUser,
            receiver,
            amount,
            currency,
            "withdrawal",
            new Date().toISOString()
          );
          if (isValidTransfer(movement)) {
            addMovement(movement, activeUser);
            toast.success(transferSuccess);
          } else {
            toast.warning(transferFail);
          }
        }}
      />
    </form>
  );
};

export default TransferForm;
