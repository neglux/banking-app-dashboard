import React from "react";

const Container = ({ children, style = "" }) => {
  return (
    <ul
      className={`flex flex-col justify-start items-start w-full h-0 mt-2 bg-gray-300 rounded-md shadow-md overflow-hidden ${style}`}
    >
      {children}
    </ul>
  );
};

export default Container;
