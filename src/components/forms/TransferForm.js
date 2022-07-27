import React, { useState } from "react";
import Dropdown from "../Inputs/Dropdown";
import LabelInput from "../Inputs/LabelInput";
import LabelTextBox from "../containers/LabelTextBox";
import Button from "../Inputs/Button";

import strings from "../../data/strings";
import bank from "../../data/bank";
import users from "../../data/user/users";

import { useGlobalContext } from "../../context/context";

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
  const {
    activeUser,
    addMovement,
    setDialog,
    findUserByFullName,
    balance,
    createMovement,
  } = useGlobalContext();

  function getNames(data) {
    return data.map((item) => {
      if (!isActiveUser(item)) return `${item?.firstName} ${item?.lastName}`;
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
            setDialog({ isShown: true, type: "suc", text: transferSuccess });
          } else {
            setDialog({ isShown: true, type: "err", text: transferFail });
          }
        }}
      />
    </form>
  );
};

export default TransferForm;
