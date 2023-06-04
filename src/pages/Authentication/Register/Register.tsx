import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import schema from './schema';
import { Input } from '../../../shared/components/Input/Input';
import { useAuth } from '../../../hooks/useAuth';

export type FormDataRegister = yup.InferType<typeof schema>;

export function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormDataRegister) => {
    signUp(data);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="content-form">
      <title>Cadastro | Cold</title>

      <div className="content">
        <div className="title">
          <span />
          <h1>Cadastrar</h1>
        </div>

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
          <div className="btn">
            <button onClick={handleCancel} className="cancel" type="reset">
              Cancelar
            </button>
            <button className="submit" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
