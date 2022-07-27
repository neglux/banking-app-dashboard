import React from "react";
import strings from "../data/strings";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { loginMsg, loginBtnText, welcomeMsg, logoutBtnText } = strings.navbar;
  const { activeUser, logout } = useGlobalContext();
  return (
    <nav className="flex w-full items-center justify-between px-10 py-8 bg-gray-900 text-gray-100">
      <div className="flex flex-col">
        <span>
          {activeUser ? `${welcomeMsg} ${activeUser.firstName}` : loginMsg}
        </span>
        <span className="text-xs text-slate-200 font-semibold mt-1">
          {Intl.DateTimeFormat(activeUser.language, {
            day: "2-digit",
            weekday: "short",
            month: "long",
            year: "numeric",
          }).format(new Date())}
        </span>
      </div>
      <button
        className="px-12 py-1 rounded-sm bg-gray-700 hover:bg-gray-600"
        onClick={() => {
          if (activeUser) {
            logout();
          }
        }}
      >
        {activeUser ? logoutBtnText : loginBtnText}
      </button>
    </nav>
  );
};

export default Navbar;
