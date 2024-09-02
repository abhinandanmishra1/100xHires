import { axios } from "@app/utils";

export const login = async () => {
  // implement login
  const loginData = {};
  return axios.post("/login", loginData); // replace with actual login endpoint
};

export const signup = async () => {
  // implement logic
};

export const getUserDetails = async () => {
  // implement logic
};
