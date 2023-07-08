export const setTokenLocal = (token) => {
  localStorage.setItem("access-token", JSON.stringify(token));
};

export const getLocalToken = () => {
  return localStorage.getItem("access-token");
};
