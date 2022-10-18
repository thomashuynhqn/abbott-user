import { createStore } from "zmp-core/lite";
import { loadUserFromCache, saveUserToCache } from "./services/storage";
import { getAccessToken, getUser } from "./services/zalo";
import { login } from "./services/user-info";

const store = createStore({
  state: {
    jwt: null,
    user: [
      {
        id: "",
        avatar: "",
        name: "",
      },
    ],
    phone: "",
  },
  getters: {
    user({ state }) {
      return state.user;
    },
    phone({ state }) {
      return state.phone;
    },
  },
  actions: {
    setUser({ state }, user) {
      state.user = user;
      saveUserToCache(user);
    },
    setJwt({ state }, jwt) {
      state.jwt = jwt;
    },
    setPhone({ state }, number) {
      state.phone = number;
    },
    async login({ dispatch }) {
      const cachedUser = await loadUserFromCache();
      if (cachedUser) {
        dispatch("setUser", cachedUser);
      }
      const token = await getAccessToken();
      const success = await login(token);
      if (success) {
        const user = await getUser();
        if (user) {
          dispatch("setUser", user);
        }
      }
    },
  },
});

export default store;
