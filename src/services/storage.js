import api from "zmp-sdk";

export const loadAddresses = () =>
  new Promise((resolve) => {
    api.getStorage({
      keys: ["addresses"],
      success: ({ addresses }) => {
        if (addresses) {
          if (addresses.filter) {
            resolve(addresses.filter((a) => !!a && !!a.address));
          }
        }
        resolve([]);
      },
      fail: (error) => {
        console.log("Failed to get addresses from storage. Details: ", error);
        resolve([]);
      },
    });
  });

export const saveAddress = async (address) => {
  const addresses = await loadAddresses();
  addresses.push(address);
  api.setStorage({
    data: { addresses },
    fail: (error) =>
      console.log("Failed to save new address to storage. Details: ", error),
  });
  return addresses;
};

export const loadUserFromCache = () =>
  new Promise((resolve) => {
    api.getStorage({
      keys: ["user"],
      success: ({ user }) => {
        if (user) {
          resolve(user);
        }
        resolve();
      },
      fail: (error) => {
        console.log("Failed to load user from cache. Details: ", error);
        resolve();
      },
    });
  });

export const saveUserToCache = async (user) => {
  await api.setStorage({
    data: { user },
    fail: (error) =>
      console.log("Failed to save user to cache. Details: ", error),
  });
  return user;
};
