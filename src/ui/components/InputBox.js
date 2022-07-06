import React from "react";

const InputBox = ({ type, placeholder, value, changeHandler }) => {
  return (
    <input
      className="flex h-[30px] px-5 my-2 text-sm placeholder:capitalize rounded-md bg-gray-100 w-[250px]"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
    ></input>
  );
};

export default InputBox;
