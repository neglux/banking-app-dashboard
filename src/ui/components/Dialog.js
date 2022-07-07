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

  const color = type === "suc" ? "green" : "red";
  return (
    <div
      className={`
       fixed
       bottom-16 right-24
       px-14 py-2
       bg-${color}-400
       rounded-sm shadow-lg
       capitalize
       `}
    >
      {text}
    </div>
  );
};

export default Dialog;
