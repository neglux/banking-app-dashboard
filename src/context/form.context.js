import { createContext, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children, controler, errors }) => {
  return (
    <FormContext.Provider value={{ controler, errors }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
