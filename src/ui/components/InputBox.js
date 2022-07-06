import React from "react";

const InputBox = ({ type, placeholder }) => {
  return (
    <input
      className="flex h-[30px] px-5 my-2 text-sm capitalize rounded-md bg-gray-100 w-[250px]"
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default InputBox;
