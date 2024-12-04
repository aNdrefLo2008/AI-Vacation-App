import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native";
import { useNavigation } from "expo-router";

import { navigationRef } from "@/components/navigation/navigate";

const API_URL = "http://192.168.2.39:3000/api"; // Update with your deployed backend URL

// Add an Authorization header for protected routes
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Example: Create an itinerary
export const createItinerary = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/itineraries`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to create itinerary:", error.response.data);
    throw error.response.data;
  }
};



export const getItineraries = async () => {
  const token = await AsyncStorage.getItem("token");

  if (typeof token == "string") {
    console.log(navigationRef.current)
    throw new Error("No token found, user is not authenticated");
  }

  try {
    const response = await axios.get(`${API_URL}/itineraries`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      // Handle token expiration
      await AsyncStorage.removeItem("token");
      Alert.alert("Session Expired", "Please log in again.");
      navigationRef.current?.reset({ index: 0, routes: [{ name: "Login" }] });
      throw new Error("Token expired, user needs to log in again.");
    } else {
      console.error("Error fetching itineraries:", error.response ? error.response.data : error);
      throw error;
    }
  }
};