import http from "src/utils/axios.utils";
import { setTokenLocal, setUserLocal } from "src/utils/storage.utils";

export const _login = async (payload) => {
  const loginResponse = await http.post("/auth/login", payload);
  if (!loginResponse.ok) return null;

  const token = loginResponse.data;
  setTokenLocal(token);

  const userResponse = await http.get("/auth/user");
  if (!userResponse.ok) return null;

  setUserLocal(userResponse.data);
  return userResponse.data;
};
