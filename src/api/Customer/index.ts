import axios from "axios";

const URL = process.env.API_URL || "http://localhost:5000/";
//  api to call register a new user
export const signUp = (data: any) => {
  return axios.post(URL + "user/addUser", data);
};
//  api to login user
export const signIn = (data: any) => {
  return axios.post(URL + "user/login", data);
};

export const getUserProfile = (token: any) => {
  return axios.get(URL + "user/getUserByID", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
