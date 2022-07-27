import React from "react";

const PlaceholderInput = ({ type, value, changeHandler, placeholder }) => {
  return (
    <input
      className="flex h-[30px] px-5 my-2 text-sm placeholder:capitalize rounded-md bg-gray-100 w-[250px] outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
    ></input>
  );
};

export default PlaceholderInput;
