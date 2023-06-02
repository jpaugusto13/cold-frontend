import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email está inválido')
      .required('O campo email é obrigatório'),
    password: yup.string().required('o campo senha é obrigatório'),
  })
  .required();

export default schema;
