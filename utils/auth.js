import Router from "next/router";

export const register = () => {
  Router.push('/dashboard')
}
export const logout = () => {
  cookie.remove("token");
  Router.push("/login");
};