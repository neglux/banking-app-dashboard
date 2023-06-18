export const selectUsers = (user) =>
  user.id !== JSON.parse(localStorage.getItem("user")).id;

export const mapFullName = (user) => `${user.firstName} ${user.lastName}`;
