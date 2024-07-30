import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from './authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: authService.isLoggedIn(),
    username: authService.getUserName(),
  });

  useEffect(() => {
    const checkAuth = async () => {
      if (authService.isLoggedIn()) {
        setAuthState({
          isLoggedIn: true,
          username: authService.getUserName(),
        });
      }
    };
    checkAuth();
  }, []);

  const login = async (loginRequestPayload) => {
    const data = await authService.login(loginRequestPayload);
    setAuthState(prevState => ({
      ...prevState,
      isLoggedIn: true,
      username: data.username,
    }));
  };

  const logout = async () => {
    await authService.logout();
    setAuthState({
      isLoggedIn: false,
      username: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
