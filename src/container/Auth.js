export const setUser = (user) => {
  localStorage.setItem('@user', JSON.stringify(user));
}

export const setUserName = (userName) => {
  localStorage.setItem('@userName', userName);
}

export const setAccessToken = (token) => {
  localStorage.setItem('@access-Token', token);
}

