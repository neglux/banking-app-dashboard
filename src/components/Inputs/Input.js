import { NativeSelect, PasswordInput, Select, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import bank from "../../data/bank";

const Input = ({
  label,
  required = false,
  type = "text",
  disabled = false,
  data = [],
}) => {
  const { control, errors } = useFormContext();

  const getField = useCallback(
    ({ field }) => {
      if (type === "password")
        return (
          <PasswordInput
            error={errors[label]?.type}
            placeholder={label}
            disabled={disabled}
            {...field}
          />
        );

      if (type === "currency")
        return (
          <TextInput
            type="number"
            error={errors[label]?.type}
            placeholder={label}
            rightSection={<NativeSelect data={bank.currencies} />}
            rightSectionWidth={80}
            disabled={disabled}
            {...field}
          />
        );

      if (type === "select")
        return (
          <Select
            label={label}
            placeholder="Choose One"
            data={data}
            error={errors[label]?.type}
            {...field}
          />
        );

      return (
        <TextInput
          error={errors[label]?.type}
          placeholder={label}
          disabled={disabled}
          {...field}
        />
      );
    },
    [type, errors]
  );

  return (
    <Controller
      name={label}
      control={control}
      rules={{ required }}
      render={getField}
    />
  );
};

export default Input;
