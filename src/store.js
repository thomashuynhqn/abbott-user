import { createStore } from "zmp-core/lite";
import { zmp } from "zmp-framework/react";
import { login } from "./services/user-info";
import { loadAddresses, saveUserToCache } from "./services/storage";
import { follow, getUser } from "./services/zalo";

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
    showCheckout: false,
    shipping: false,
    categories: [
      {
        value: "",
        title: "Tất cả sản phẩm",
      },
      {
        value: "Ensure Gold",
        title: "Ensure Gold",
      },
      {
        value: "Glucerna",
        title: "Glucerna",
      },
    ],
    loadingProducts: true,
    products: [],
    loadingOrders: true,
    orders: [],
    selectedAddress: null,
    shops: [
      {
        selected: true,
        name: "Gian hàng chính hãng Abbott",
        address: "",
        open: { hour: 8, minute: 0 },
        close: { hour: 17, minute: 0 },
      },
    ],
    cart: [],
    discounts: [
      {
        code: "GIAM20K",
        name: "Lorem",
        expireDate: "10/05/2021",
        image: "discount-1",
      },
      {
        code: "GIAM35%",
        name: "Lorem",
        expireDate: "10/05/2021",
        image: "discount-2",
      },
    ],
    selectedDiscount: null,
    addresses: [],
    shippingTime: [new Date(), new Date().getHours(), new Date().getMinutes()],
    note: "",
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
      const user = await getUser();
      if (user) {
        dispatch("setUser", user);
      }
    },
  },
});

export default store;
