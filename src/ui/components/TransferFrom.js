import React, { useState } from "react";
import strings from "../../data/strings";
import Dropdown from "./Dropdown";
import Input from "./Input";
import TextBox from "./TextBox";
import users from "../../data/users";
import bank from "../../data/bank";
import { useGlobalContext } from "../../context/context";
import Button from "./Button";

const TransferFrom = () => {
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
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const { activeUser, addMovement } = useGlobalContext();

  function getNames(data) {
    return data.map((item) => {
      if (!isActiveUser(item)) return `${item?.firstName} ${item?.lastName}`;
    });
  }

  function isActiveUser(user) {
    return activeUser === user;
  }

  function createMovement(sender, receiver, amount, currency, type, date) {
    return {
      sender: `${sender.firstName} ${sender.lastName}`,
      receiver,
      amount: parseInt(amount),
      currency,
      type: type,
      date: date,
    };
  }

  return (
    <form
      className="ml-40 my-20"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextBox
        label={senderLabelText}
        text={`${activeUser.firstName} ${activeUser.lastName}`}
      />
      <Dropdown
        text={receiverLabelText}
        data={getNames(users)}
        selectHandler={setReceiver}
      />
      <div className="flex items-center">
        <Input
          text={amountLabelText}
          value={amount}
          changeHandler={setAmount}
        />
        <Dropdown
          text={currencyLabelText}
          data={bank.currencies}
          selectHandler={setCurrency}
        />
      </div>
      <div className="flex items-center">
        <TextBox label={dateLabelText} text={new Date().toDateString()} />
        <TextBox label={feeLabelText} text={"$0.14"} />
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
          addMovement(movement, activeUser);
        }}
      />
    </form>
  );
};

export default TransferFrom;
