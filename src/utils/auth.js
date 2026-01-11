const KEY = "daraz_users"; // array of {phone,email,password}

export const getUsers = () => JSON.parse(localStorage.getItem(KEY)) || [];
export const saveUser = (u) => {
  const all = getUsers();
  all.push(u);
  localStorage.setItem(KEY, JSON.stringify(all));
};

/* returns null on fail, user object on success */
export const tryLogin = ({ phone, email, password }) => {
  const all = getUsers();
  return all.find(
    (u) =>
      (phone ? u.phone === phone : u.email === email) && u.password === password
  );
};
