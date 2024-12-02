import axios from "axios";

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

// Example: Fetch user itineraries
export const getItineraries = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMzE1MTI1NywiZXhwIjoxNzMzMTU0ODU3fQ.FeDBQDM-0TeXDRkSwhvm-5UwbZT5TCoplBjnBmCj_9c";
  
    if (!token) {
      throw new Error("No token found, user is not authenticated.");
    }
  
    try {
      const response = await axios.get(`${API_URL}/itineraries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;  // Response should be an array of itineraries
    } catch (error) {
      console.error("Error fetching itineraries:", error.response ? error.response.data : error);
      throw error;
    }
  };