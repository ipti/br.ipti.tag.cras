const TOKEN_KEY = "token";
const id_key = "cras-id";
const id_attendance = "cras-id-attendance";
const menu_key = "cras-menu";
const user_key = "cras-user";

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
  localStorage.clear();
};

export const setUserData = (user) => {
  localStorage.setItem(user_key, JSON.stringify(user));
};

export const getUserData = () => {
  try {
    const raw = localStorage.getItem(user_key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const idUser = (id) => {
  localStorage.setItem(id_key, id);
}

export const idAttendance = (id) => {
  localStorage.setItem(id_attendance, id);
}

export const GetIdAttendance = () => {
  return localStorage.getItem(id_attendance);
}

export const GetIdUser = () => {
  return localStorage.getItem(id_key);
}
export const menuItem = (id) => {
  localStorage.setItem(menu_key, id);
}


export const getMenuItem = () => {
  return localStorage.getItem(menu_key);
}
