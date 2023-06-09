const AnimatedIcon = ({ icon, color, size = "30px", trigger = "hover" }) => {
  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${icon.type()}.json`}
      trigger={trigger}
      colors={`primary:${color}`}
      style={{ width: size, height: size }}
    ></lord-icon>
  );
};

export default AnimatedIcon;
