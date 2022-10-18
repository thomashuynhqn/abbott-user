import { zmpready } from "zmp-framework/react";
import api from "zmp-sdk";
import config from "../config";
import store from "../store";

export const getUser = () =>
  new Promise((resolve) => {
    api.getUserInfo({
      avatarType: "large",
      success: ({ userInfo }) => {
        zmpready(() => {
          store.dispatch("setUser", userInfo).then(resolve);
        });
      },
    });
  });

export const getPhoneNumber = () =>
  new Promise((resolve) => {
    api.getPhoneNumber({
      number: "",
      success: ({ number }) => {
        zmpready(() => {
          store.dispatch("setPhone", number).then(resolve);
        });
      },
    });
  });

export const getAccessToken = () =>
  new Promise((resolve) => {
    api.login({
      success: () => {
        api.getAccessToken({
          success: (token) => {
            if (
              token === "DEFAULT ACCESS TOKEN" &&
              config.DEFAULT_ACCESS_TOKEN
            ) {
              // eslint-disable-next-line no-param-reassign
              token = config.DEFAULT_ACCESS_TOKEN; // For testing purpose only
            }
            resolve(token);
          },
          fail: (error) => {
            console.error(error);
          },
        });
      },
      fail: (error) => {
        console.error(error);
      },
    });
  });
