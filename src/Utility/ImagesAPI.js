import axios from "axios";
import { URL } from "../URL";

// Define your base URL (replace with your actual API endpoint)
const API_URL = `${URL}/api/images`; // Replace with your actual API URL

// Axios instance to set the base URL and headers
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data", // For file upload
  },
});

// Upload image
export const uploadImage = async (formData) => {
  try {
    const response = await axiosInstance.post("/upload", formData);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Get all images
export const getAllImages = async () => {
  try {
    const response = await axiosInstance.get("/images");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
