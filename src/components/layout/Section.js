const Section = ({ children, style = "" }) => {
  return <section className={`mx-10 my-2 ${style}`}>{children}</section>;
};

export default Section;
