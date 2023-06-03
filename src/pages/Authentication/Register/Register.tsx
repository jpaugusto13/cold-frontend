import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import api from '../../../services/api';
import schema from './components/schema';
import { Input } from '../../../shared/components/Input/Input';

type FormData = yup.InferType<typeof schema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await api.post('/Auth/register', data).then(() => {
        alert('Usuário cadastrado com sucesso');
        navigate('/entrar');
      });
    } catch (e) {
      alert('Esse email de usuário já está cadastradp');
    }
  };

  return (
    <>
      <title>Cadastro | Cold</title>

      <Link to="/">Voltar</Link>
      <h1>Cadastrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Nome"
          errors={errors?.name}
          {...register('name')}
        />
        <Input
          type="text"
          label="Email"
          errors={errors?.email}
          {...register('email')}
        />
        <Input
          type="password"
          label="Senha"
          errors={errors?.password}
          {...register('password')}
        />
        <Input
          type="password"
          label="Confirmar senha"
          errors={errors?.confirmPassword}
          {...register('confirmPassword')}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
