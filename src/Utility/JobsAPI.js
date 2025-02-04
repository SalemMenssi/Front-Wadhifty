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

// Add a new job
export const addJob = async (jobData) => {
  try {
    const response = await axiosInstance.post("/api/job", jobData);
    return response.data;
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
};

// Get all jobs
export const getAllJobs = async () => {
  try {
    const response = await axiosInstance.get("/api/job");
    return response.data.JobList;
  } catch (error) {
    console.error("Error fetching all jobs:", error);
    throw error;
  }
};

// Get a job by ID
export const getJobById = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/api/job/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    throw error;
  }
};

// Delete a job by ID
export const deleteJob = async (jobId) => {
  try {
    const response = await axiosInstance.delete(`/api/job/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

// Update job details
export const updateJob = async (jobId, jobData) => {
  try {
    const response = await axiosInstance.put(`/api/job/${jobId}`, jobData);
    return response.data;
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
};

// Change job image
export const changeJobImage = async (jobId, imageId) => {
  try {
    const response = await axiosInstance.post(
      `/api/job/change-image/${jobId}/${imageId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error changing job image:", error);
    throw error;
  }
};
