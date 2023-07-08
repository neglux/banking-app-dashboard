import axios from "axios";
import qs from "qs";

const url = process.env.REACT_APP_CASPIAN_API_URL;

const http = axios.create({
  baseURL: url,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  },
});

http.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default http;
