import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { FormDataLogin } from '../pages/Authentication/Login/Login';
import { FormDataRegister } from '../pages/Authentication/Register/Register';
import Swal from 'sweetalert2';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  money: number;
}

interface AuthContextData {
  isLoggedIn: boolean;
  user: User;
  signIn: ({ email, password }: FormDataLogin) => void;
  signUp: ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }: FormDataRegister) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const key = 'token@COLD';

const userDefault: User = {
  firstName: 'Não logado',
  lastName: '',
  email: '',
  money: 0,
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(userDefault);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(key);
    if (token) {
      const dataUse = async () => {
        const user = await api
          .get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => data);
        setIsLoggedIn(true);
        console.log(user)
        setUser(user);
      };
      dataUse();
    }
  }, [isLoggedIn]);

  const signUp = async (data: FormDataRegister) => {
    Swal.fire({
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await api
      .post('/Auth/register', data)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Usuário cadastrado com sucesso!',
        });
        navigate('/autenticacao/entrar');
      })
      .catch(({ response }) => {
        const { status } = response;
        if (status === 409) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Esse endereço de email já foi cadastrado',
          });
        }
      });
  };

  // Função de SignIn de usuário
  const signIn = async (data: FormDataLogin) => {
    Swal.fire({
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await api
      .post('Auth/login', data)
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Usuário autenticado com sucesso!',
        });
        setIsLoggedIn(true);
        localStorage.setItem(key, data.token);
        navigate('/');
      })
      .catch(({ response }) => {
        const { status } = response;

        if (status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Esse usuário não foi cadastrado!',
          });
        } else if (status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha incorreta!',
          });
        }
      });
  };

  // Função de logout de usuário
  const logout = () => {
    localStorage.removeItem(key);
    setUser(userDefault);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, logout, user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
