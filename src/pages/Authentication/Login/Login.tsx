import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import schema from './schema';
import { Input } from '../../../shared/components/Input/Input';
import { useAuth } from '../../../hooks/useAuth';

export type FormDataLogin = yup.InferType<typeof schema>;

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormDataLogin) => {
    signIn(data);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="content-form">
      <div className="content">
        <div className="title">
          <span />
          <h1>Entrar</h1>
        </div>

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
          <div className="btn">
            <button onClick={handleCancel} className="cancel" type="reset">
              Cancelar
            </button>
            <button className="submit" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
