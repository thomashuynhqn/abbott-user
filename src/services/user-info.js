import store from "../store";
import api from "zmp-sdk";

const base = "https://api.3anutrition.com";

export const request = async (method, url, data) => {
  const headers = { "Content-Type": "application/json" };
  const token = store.state.jwt;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(`${base}/${url}`, {
    method: method,
    body: JSON.stringify(data),
    headers,
  });
};

export const login = async (accessToken) => {
  try {
    const response = await api.login({
      accessToken,
    });
    return response;
  } catch (error) {
    console.log("Error logging in. Details: ", error);
    return false;
  }
};
