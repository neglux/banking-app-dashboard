import { createContext, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children, control, errors }) => {
  return (
    <FormContext.Provider value={{ control, errors }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
