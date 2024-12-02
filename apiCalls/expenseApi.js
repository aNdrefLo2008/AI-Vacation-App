import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Update with your deployed backend URL

export const createExpense = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/expenses`, data);
      return response.data;
    } catch (error) {
      console.error("Failed to create expense:", error.response.data);
      throw error.response.data;
    }
  };