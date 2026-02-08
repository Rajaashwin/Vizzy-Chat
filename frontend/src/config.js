// API Configuration
// This automatically uses the correct backend URL based on environment

const isDevelopment = import.meta.env.MODE === 'development';

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:8000'
  : import.meta.env.VITE_API_BASE_URL || 'https://vizzy-backend.railway.app'; // use VITE_API_BASE_URL for consistency

export const API_ENDPOINTS = {
  chat: `${API_BASE_URL}/chat`,
  session: `${API_BASE_URL}/session`,
};

export default {
  API_BASE_URL,
  API_ENDPOINTS,
};
