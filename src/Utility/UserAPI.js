import axios from "axios";
import { URL } from "../URL";

// Define your base URL (replace with your actual API endpoint)
const API_URL = `${URL}/api/user`;

// Axios instance to set the base URL and headers
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Register function
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login function
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

// Get a user by ID
export const getUserById = async (userId) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user by ID:", error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Update user data by ID
export const updateUser = async (userId, userData) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Change user avatar
export const changeAvatar = async (userId, imageId) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/change-avatar/${userId}/${imageId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error changing avatar:", error);
    throw error;
  }
};

// Change user resume
export const changeResume = async (userId, fileId) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/change-resume/${userId}/${fileId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error changing resume:", error);
    throw error;
  }
};
