import users from "../data/user/users";

export function login(username, password) {
  const validUser = users.find(
    (user) => user?.username === username && user?.password === password
  );

  if (!validUser) return null;

  return localStorage.setItem("user", JSON.stringify(validUser));
}

export function getActiveUser() {
  return JSON.parse(localStorage.getItem("user")) || null;
}

export function logout() {
  return localStorage.clear();
}
