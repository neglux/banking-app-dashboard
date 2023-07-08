import { useMutation } from "react-query";
import http from "src/utils/axios.utils";

export const useLogin = () => {
  const { mutate: _login, data: resp } = useMutation(
    "login-request",
    (payload) => http.post("/auth/login", payload),
    {
      enabled: false,
    }
  );

  return { _login, token: resp?.data };
};
