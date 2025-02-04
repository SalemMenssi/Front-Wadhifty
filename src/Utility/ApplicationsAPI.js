import axios from "axios";
import { URL } from "../URL";

// Define your base URL (replace with your actual API endpoint)
const API_URL = URL; // Replace with your actual API URL

// Axios instance to set the base URL and headers
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Apply for a job
export const applyForJob = async (applicationData) => {
  try {
    const response = await axiosInstance.post(
      "/api/application/apply",
      applicationData
    );
    return response.data;
  } catch (error) {
    console.error("Error applying for job:", error);
    throw error;
  }
};

// Get all applications (for admin)
export const getAllApplications = async () => {
  try {
    const response = await axiosInstance.get("/api/application");
    return response.data.applications;
  } catch (error) {
    console.error("Error fetching all applications:", error);
    throw error;
  }
};

// Get a specific application by ID
export const getApplicationById = async (applicationId) => {
  try {
    const response = await axiosInstance.get(
      `/api/application/${applicationId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    throw error;
  }
};

// Delete an application by ID
export const deleteApplication = async (applicationId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/application/${applicationId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting application:", error);
    throw error;
  }
};

// Update application status (e.g., approved, rejected)
export const updateApplicationStatus = async (applicationId, statusData) => {
  try {
    const response = await axiosInstance.put(
      `/api/application/${applicationId}`,
      statusData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating application status:", error);
    throw error;
  }
};
