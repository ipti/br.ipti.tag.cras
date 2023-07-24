const TOKEN_KEY = "token";
const id_key = "ludus-id";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};


export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(id_key);
  localStorage.clear();
};

export const idUser = (id) => {
  localStorage.setItem(id_key, id);
}


export const getId = () => {
  return localStorage.getItem(id_key);
}
