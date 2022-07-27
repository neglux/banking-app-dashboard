import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";

const Dialog = ({ type, text }) => {
  const { setDialog } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setDialog({ isShown: false });
    }, 2000);
    return clearTimeout();
  }, []);

  const color = type === "suc" ? "bg-green-400" : "bg-red-400";
  return (
    <div
      className={`
       fixed
       bottom-16 right-24
       px-14 py-2
       ${color}
       rounded-md shadow-lg
       capitalize
       font-semibold
       `}
    >
      {text}
    </div>
  );
};

export default Dialog;
