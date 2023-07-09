import { Loader, Button as MantineButton } from "@mantine/core";

const Button = ({
  text,
  type = "button",
  clickHandler = () => {},
  loading = false,
}) => {
  return (
    <MantineButton
      className=" bg-green-500 text-gray-50 hover:bg-green-600 disabled:bg-transparent"
      onClick={clickHandler}
      type={type}
      fullWidth
      disabled={loading}
    >
      {loading ? <Loader size="sm" color="green" /> : text}
    </MantineButton>
  );
};

export default Button;
