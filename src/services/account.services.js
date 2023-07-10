import http from "src/utils/axios.utils";

export const _getAccounts = async () => {
  try {
    const response = await http.get("/account");

    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const _addAccount = async () => {
  try {
    const response = await http.post("/account");

    return response;
  } catch (error) {
    return error.response.data;
  }
};
