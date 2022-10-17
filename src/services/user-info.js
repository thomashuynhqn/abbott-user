import config from "../config";
import store from "../store";

const base = "https://api.3anutrition.com";
let cachedPostData = null;

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
    const response = await (
      await request("POST", "api/ZaloUserMaster", {
        accessToken,
      })
    ).json();
    if (response.data.jwt) {
      store.dispatch("setJwt", response.data.jwt);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error logging in. Details: ", error);
    return false;
  }
};

export const postServiceData = async (url, params) => {
  console.log("cache status" + cachedPostData);
  if (cachedPostData === null) {
    console.log("post-data: requesting data");
    const response = await fetch(`${base}/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    cachedPostData = response.json();
    return await cachedPostData;
  } else {
    console.log("post-data: returning cachedPostData data");
    return Promise.resolve(cachedPostData);
  }
};
