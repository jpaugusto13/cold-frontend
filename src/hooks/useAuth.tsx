import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  const { signIn, signUp, logout, isLoggedIn, user } = context;

  return {
    signIn,
    signUp,
    logout,
    user,
    isLoggedIn,
  };
}
