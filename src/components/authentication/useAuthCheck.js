import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const useAuthCheck = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.isLoggedIn) {
      navigate('/login');
    }
  }, [authState.isLoggedIn, navigate]);

  return authState.isLoggedIn;
};

export default useAuthCheck;
