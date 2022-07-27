import React from "react";
import { useGlobalContext } from "../../context/context";
import strings from "../../data/strings";
import BinaryButtons from "../Inputs/BinaryButtons";

const CookieDialog = () => {
  const { cookie } = strings.dialogs;
  const { hideCookieDialog } = useGlobalContext();
  return (
    <div className="flex justify-evenly items-center py-1 bg-green-400">
      <div>
        <h5 className="font-semibold capitalize">{cookie.title}</h5>
        <p className=" first-letter:uppercase text-sm">{cookie.text}</p>
      </div>
      <BinaryButtons
        positiveOption={{
          text: cookie.agree,
          clickHandler: () => {
            hideCookieDialog();
          },
        }}
        negativeOption={{
          text: cookie.decline,
          clickHandler: () => {
            hideCookieDialog();
          },
        }}
      />
    </div>
  );
};

export default CookieDialog;
