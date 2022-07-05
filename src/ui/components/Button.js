import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" bg-green-500 text-gray-50 px-10 py-2 rounded hover:bg-green-600">
      {text}
    </button>
  );
};

export default Button;
