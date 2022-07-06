import React from "react";
import strings from "../../data/strings";
import Dropdown from "./Dropdown";
import Input from "./Input";
import TextBox from "./TextBox";
import users from "../../data/users";
import bank from "../../data/bank";
import { useGlobalContext } from "../../context/context";

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
  const { activeUser } = useGlobalContext();
  const names = getNames(users);

  function getNames(object) {
    const array = object.map((item) => {
      return `${item?.firstName} ${item?.lastName}`;
    });

    return array;
  }

  return (
    <form className="ml-40 my-20">
      <TextBox
        label={senderLabelText}
        text={`${activeUser.firstName} ${activeUser.lastName}`}
      />
      <Dropdown text={receiverLabelText} data={names} />
      <div className="flex items-center">
        <Input text={amountLabelText} />
        <Dropdown text={currencyLabelText} data={bank.currencies} />
      </div>
      <div className="flex items-center">
        <TextBox label={dateLabelText} text={"12/10/2028"} />
        <TextBox label={feeLabelText} text={"$0.14"} />
      </div>
      <button className="mt-10 bg-green-500 text-gray-50 px-10 py-2 rounded hover:bg-green-600">
        {sendBtn}
      </button>
    </form>
  );
};

export default TransferFrom;
