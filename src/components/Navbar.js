import React from "react";
import strings from "../data/strings";

const Navbar = () => {
  const { loginMsg, loginBtnText } = strings.navbar;
  return (
    <nav className="flex w-full items-center justify-between px-10 py-8 bg-gray-900 text-gray-100">
      <span>{loginMsg}</span>
      <button className="px-12 py-1 rounded-sm bg-gray-700 hover:bg-gray-600">
        {loginBtnText}
      </button>
    </nav>
  );
};

export default Navbar;
