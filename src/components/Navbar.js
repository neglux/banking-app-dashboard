import React from "react";
import strings from "../data/strings";
import { useAuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loginMsg, welcomeMsg, logoutBtnText, logoutBtnIcon } = strings.navbar;
  const { activeUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
    logout();
  };

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
        className="flex items-center px-12 py-1 rounded-sm bg-gray-700 hover:bg-gray-600"
        onClick={handleLogout}
      >
        <i className="mr-1 text-lg*">{logoutBtnIcon}</i>
        <p>{logoutBtnText}</p>
      </button>
    </nav>
  );
};

export default Navbar;
