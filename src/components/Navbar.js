import React from "react";
import strings from "../data/strings";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { loginMsg, loginBtnText, welcomeMsg, logoutBtnText } = strings.navbar;
  const { activeUser, logout } = useGlobalContext();
  return (
    <nav className="flex w-full items-center justify-between px-10 py-8 bg-gray-900 text-gray-100">
      <span>
        {activeUser ? `${welcomeMsg} ${activeUser.firstName}` : loginMsg}
      </span>
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
