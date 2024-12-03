import AsyncStorage from "@react-native-async-storage/async-storage";

// Save token
export const saveToken = async (token) => {
  await AsyncStorage.setItem("authToken", token);
};

// Get token
export const getToken = async () => {
  return await AsyncStorage.getItem("authToken");
};

// Remove token
export const removeToken = async () => {
  await AsyncStorage.removeItem("authToken");
};
