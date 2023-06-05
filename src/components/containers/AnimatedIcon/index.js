import React from "react";

const AnimatedIcon = ({ icon, color }) => {
  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${icon.type()}.json`}
      trigger="hover"
      colors={`primary:${color}`}
      style={{ width: "30px", height: "30px" }}
    ></lord-icon>
  );
};

export default AnimatedIcon;
