export const setUser = (user) => {
  localStorage.setItem('@user', JSON.stringify(user));
}
export const getUser = () => {
  const defaultGetUser = {};
  try {
    const getUserInfo = localStorage.getItem('@user');
    return {
      getUserInfo: getUserInfo ? JSON.parse(getUserInfo) : ''
    }
  } catch (e) {
    return {
      getUserInfo: defaultGetUser
    }
  }
}
export const setUserName = (userName) => {
  localStorage.setItem('@userName', userName);
}

export const setAccessToken = (token) => {
  localStorage.setItem('@access-Token', token);
}

export const setPathName = (path) => {
  localStorage.setItem('@pathname', path);
}

