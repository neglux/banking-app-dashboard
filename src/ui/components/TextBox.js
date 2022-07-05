import React from "react";

const TextBox = ({ label, text }) => {
  return (
    <div className="my-5">
      <label className="capitalize">{label}:</label>
      <span className="ml-5 py-1 px-5 bg-gray-200 rounded-md mr-5">{text}</span>
    </div>
  );
};

export default TextBox;
