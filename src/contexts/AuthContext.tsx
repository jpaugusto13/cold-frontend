import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface SignInProps {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  money: number;
}

interface AuthContextData {
  isLoggedIn: boolean;
  user: User;
  signIn: ({ email, password }: SignInProps) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const key = 'token@COLD';

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({} as User);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(key);
    if (token) {
      const dataUse = async () => {
        await api
          .get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => setUser(data));
      };
      setIsLoggedIn(true);
      dataUse();
    }
  }, []);

  const signIn = async (data: SignInProps) => {
    await api
      .post('Auth/login', data)
      .then(({ data }) => {
        alert('Usuário logado com sucesso');
        setIsLoggedIn(true);
        localStorage.setItem(key, data.token);
        navigate('/');
      })
      .catch(({ response }) => {
        const { status } = response;

        if (status === 404) alert('Usuário não cadastrado');
        else if (status === 401) alert('Senha incorreta');
      });
  };

  const logout = () => {
    localStorage.removeItem(key);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
