// services/api.js
import axios from 'axios';
import authService from '../../authentication/authService';

const API_URL = 'http://localhost:8090/api/v1/user'; // Update this URL as needed

const getProfile = () => {
  return axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${authService.getJwtToken()}`,
    },
  });
};

const updateProfile = (user) => {
  return axios.post(`${API_URL}/profile`, user, {
    headers: {
      Authorization: `Bearer ${authService.getJwtToken()}`,
    },
  });
};

export { getProfile, updateProfile };
