import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import api from '../../../services/api';
import schema from './components/schema';
import { Input } from '../../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

type FormData = yup.InferType<typeof schema>;
export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    api
      .post('Auth/login', data)
      .then(({ data }) => {
        alert('Usuário logado com sucesso!');
        localStorage.setItem('token@COLD', data.token);
      })
      .then(() => navigate('/'));
  };

  return (
    <>
      <Link to="/">Voltar</Link>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          errors={errors?.email}
          label="Email"
          {...register('email')}
        />
        <Input
          type="password"
          errors={errors?.password}
          label="Senha"
          {...register('password')}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
