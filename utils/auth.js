import Router from "next/router";

export const newSpace = () => {
  Router.push('/dashboard')
}
export const register = () => {
  Router.push('/auth')
}
export const login = () => {
  Router.push('/dashboard')
}
export const logout = () => {
  cookie.remove("token");
  Router.push("/login");
};
export const newApp = () => {
  Router.push('/dashboard')
}
