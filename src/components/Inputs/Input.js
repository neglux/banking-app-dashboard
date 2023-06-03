import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = ({ label, required = false, type = "text" }) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      name={label}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <>
          <input
            placeholder={label}
            type={type}
            className={`flex h-[30px] px-5 my-2 text-sm placeholder:capitalize placeholder:text-slate-900 rounded-md bg-gray-200 w-[250px] outline-none ${
              errors[label] && "animate-shake bg-red-200 "
            }`}
            {...field}
          />
        </>
      )}
    />
  );
};

export default Input;
