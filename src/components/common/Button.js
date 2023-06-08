import { Button as MantineButton } from "@mantine/core";

const Button = ({ text, type = "button", clickHandler = () => {} }) => {
  return (
    <MantineButton
      className=" bg-green-500 text-gray-50 hover:bg-green-600"
      onClick={clickHandler}
      type={type}
      fullWidth
    >
      {text}
    </MantineButton>
  );
};

export default Button;
