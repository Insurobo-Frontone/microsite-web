
export const setUser = (user) => {
  localStorage.setItem('@user', JSON.stringify(user));
}


export const setAccessToken = (token) => {
  localStorage.setItem('@access-Token', token);
}



