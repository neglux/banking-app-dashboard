import React from "react";

const Input = ({ text, value, changeHandler }) => {
  return (
    <div className="flex">
      <label className="capitalize" htmlFor={text}>
        {text}:
      </label>
      <div className="ml-5 rounded-md mr-5">
        <input
          className="w-[120px] h-[30px] bg-gray-300 rounded-md px-2 text-center"
          name={text}
          type="number"
          value={value}
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Input;
