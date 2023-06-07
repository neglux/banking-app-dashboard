import { PasswordInput, Select, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { useFormContext } from "src/context/form.context";

const NumberInput = (props) => {
  return <TextInput type="number" {...props} />;
};

const Input = ({
  name,
  required = false,
  type = "text",
  disabled = false,
  data = [],
  ...restProps
}) => {
  const { control, errors } = useFormContext();

  const getInputComponent = useCallback(() => {
    switch (type) {
      case "password":
        return PasswordInput;
      case "select":
        return Select;
      case "number":
        return NumberInput;
      default:
        return TextInput;
    }
  }, [type]);

  const InputComponent = getInputComponent();
  const getField = ({ field }) => (
    <InputComponent
      data={data}
      error={errors[name]?.type}
      disabled={disabled}
      {...field}
      {...restProps}
    />
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={getField}
    />
  );
};

export default Input;
