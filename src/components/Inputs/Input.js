import { PasswordInput, TextInput } from "@mantine/core";
import React, { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = ({ label, required = false, type = "text" }) => {
  const { control, errors } = useFormContext();

  const getField = useCallback(
    ({ field }) => {
      if (type === "password")
        return (
          <PasswordInput
            error={errors[label]?.type}
            placeholder={label}
            {...field}
          />
        );

      return (
        <TextInput error={errors[label]?.type} placeholder={label} {...field} />
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
