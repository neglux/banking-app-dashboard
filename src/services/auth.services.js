import http from "src/utils/axios.utils";
import { setTokenLocal, setUserLocal } from "src/utils/storage.utils";

export const _login = async (payload) => {
  try {
    const loginResponse = await http.post("/auth/login", payload);

    const token = loginResponse.data;
    setTokenLocal(token);

    const userResponse = await http.get("/auth/user");

    setUserLocal(userResponse.data);
    return userResponse;
  } catch (error) {
    return error.response.data;
  }
};
