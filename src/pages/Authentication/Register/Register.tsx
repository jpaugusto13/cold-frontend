import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import schema from './schema';
import { Input } from '../../../shared/components/Input/Input';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import transitions from '@material-ui/core/styles/transitions';

export type FormDataRegister = yup.InferType<typeof schema>;

export function Register() {
  const [step, setStep] = useState(1);

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
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

  const handleStep = async (step: number) => {
    if (step === 1) {
      setStep(step);
    }

    if (step === 2) {
      const response = await trigger(['firstName', 'lastName', 'email']);
      response ? setStep(step) : undefined;
    }
    if (step === 3) {
      const response = await trigger(['birthday', 'cpf']);
      response ? setStep(step) : undefined;
    }
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
          {step === 1 ? (
            <>
              <Input
                type="text"
                label="Nome"
                errors={errors?.firstName}
                {...register('firstName')}
              />
              <Input
                type="text"
                label="Sobrenome"
                errors={errors?.lastName}
                {...register('lastName')}
              />
              <Input
                type="text"
                label="Email"
                errors={errors?.email}
                {...register('email')}
              />
              <div className="btn">
                <button onClick={handleCancel} className="cancel" type="reset">
                  Cancelar
                </button>
                <button
                  onClick={() => handleStep(2)}
                  className="submit"
                  type="button"
                >
                  Próximo
                </button>
              </div>
            </>
          ) : step === 2 ? (
            <>
              <Input
                type="text"
                label="CPF"
                errors={errors?.cpf}
                {...register('cpf')}
              />
              <Input
                type="date"
                label="Data de nascimento"
                errors={errors?.birthday}
                {...register('birthday')}
              />

              <div className="btn">
                <button
                  onClick={() => handleStep(1)}
                  className="cancel"
                  type="button"
                >
                  Voltar
                </button>
                <button
                  onClick={() => handleStep(3)}
                  className="submit"
                  type="button"
                >
                  Próximo
                </button>
              </div>
            </>
          ) : (
            <>
              <Input
                type="password"
                label="Senha"
                errors={errors?.password}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirmação de senha"
                errors={errors?.confirmPassword}
                {...register('confirmPassword')}
              />

              <div className="btn">
                <button
                  onClick={() => handleStep(2)}
                  className="cancel"
                  type="button"
                >
                  Voltar
                </button>
                <button className="submit" type="submit">
                  Cadastrar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
