import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import schema from './components/schema';
import { Input } from '../../../shared/components/Input/Input';
import { useAuth } from '../../../hooks/useAuth';

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    signIn(data);
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
