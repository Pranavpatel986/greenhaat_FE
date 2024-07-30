import axios from 'axios';
import localStorage from 'local-storage';

const API_URL = 'http://localhost:8090/api/auth/';

const signup = async (signupRequestPayload) => {
  return axios.post(`${API_URL}signup`, signupRequestPayload, { responseType: 'text' });
};

const login = async (loginRequestPayload) => {
  const response = await axios.post(`${API_URL}login`, loginRequestPayload);
  if (response.data.authenticationToken) {
    localStorage.set('authenticationToken', response.data.authenticationToken);
    localStorage.set('username', response.data.username);
    localStorage.set('refreshToken', response.data.refreshToken);
    localStorage.set('expiresAt', response.data.expiresAt);
  }
  return response.data;
};

const getJwtToken = () => {
  return localStorage.get('authenticationToken');
};

const refreshToken = async () => {
  const refreshTokenPayload = {
    refreshToken: getRefreshToken(),
    username: getUserName(),
  };
  const response = await axios.post(`${API_URL}refresh/token`, refreshTokenPayload);
  localStorage.set('authenticationToken', response.data.authenticationToken);
  localStorage.set('expiresAt', response.data.expiresAt);
  return response.data;
};

const logout = async () => {
  const refreshTokenPayload = {
    refreshToken: getRefreshToken(),
    username: getUserName(),
  };
  await axios.post(`${API_URL}logout`, refreshTokenPayload, { responseType: 'text' });
  localStorage.remove('authenticationToken');
  localStorage.remove('username');
  localStorage.remove('refreshToken');
  localStorage.remove('expiresAt');
};

const getUserName = () => {
  return localStorage.get('username');
};

const getRefreshToken = () => {
  return localStorage.get('refreshToken');
};

const isLoggedIn = () => {
  return getJwtToken() !== null;
};

export default {
  signup,
  login,
  getJwtToken,
  refreshToken,
  logout,
  getUserName,
  getRefreshToken,
  isLoggedIn,
};
