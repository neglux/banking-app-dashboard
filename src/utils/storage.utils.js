export const setTokenLocal = (token) => {
  localStorage.setItem("access-token", JSON.stringify(token));
};

export const getLocalToken = () => {
  return localStorage.getItem("access-token");
};

export const setUserLocal = (user) => {
  localStorage.setItem("user-data", JSON.stringify(user));
};

export const getLocalUser = () => {
  return localStorage.getItem("user-data");
};
