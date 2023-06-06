import React from "react";
import strings from "../../data/strings";
import BinaryButtons from "../Inputs/BinaryButtons";
import { useGlobalContext } from "../../context/context";

const CookieDialog = () => {
  const { cookie } = strings.dialogs;
  const { handleCookieAcceptance } = useGlobalContext();
  return (
    <div className="flex justify-evenly items-center py-1 bg-[#ECEB98]">
      <div>
        <h5 className="font-semibold capitalize">{cookie.title}</h5>
        <p className=" first-letter:uppercase text-sm">{cookie.text}</p>
      </div>
      <BinaryButtons
        positiveOption={{
          text: cookie.agree,
          clickHandler: handleCookieAcceptance,
        }}
        negativeOption={{
          text: cookie.decline,
          clickHandler: handleCookieAcceptance,
        }}
      />
    </div>
  );
};

export default CookieDialog;
