import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  const { signIn, logout, isLoggedIn, user } = context;

  return {
    signIn,
    logout,
    user,
    isLoggedIn,
  };
}
