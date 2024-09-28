const users = [
  {
    id: "1",
    email: "uzzal@email.com",
    password: "password",
  },
  {
    id: "2",
    email: "ridwan@email.com",
    password: "password",
  },
  {
    id: "3",
    email: "alo@email.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
