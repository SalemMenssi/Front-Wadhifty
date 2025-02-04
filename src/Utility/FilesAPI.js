import axios from "axios";
import { URL } from "../URL";

// Define your base URL (replace with your actual API endpoint)
const API_URL = `${URL}/api/files`; // Replace with your actual API URL

// Axios instance to set the base URL and headers
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data", // For file upload
  },
});

// Upload PDF file
export const uploadPDF = async (formData) => {
  try {
    const response = await axiosInstance.post("/upload", formData);
    return response.data;
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
};

export const getAllFiles = async () => {
  try {
    const response = await axiosInstance.get("/files");
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};
