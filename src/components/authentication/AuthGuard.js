import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthGuard = ({ children }) => {
  const { authState } = useAuth();

  if (!authState.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
