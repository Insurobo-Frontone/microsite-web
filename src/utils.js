
export const isLogin = () => {
  return !!localStorage.getItem("@access-Token");
}
