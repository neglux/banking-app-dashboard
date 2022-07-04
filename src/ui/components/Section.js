import React from "react";

const Section = ({ children, style }) => {
  return <section className={`mx-10 my-5 ${style}`}>{children}</section>;
};

export default Section;
