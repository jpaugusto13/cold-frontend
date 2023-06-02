import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório!'),
    email: yup
      .string()
      .email('O campo email está inválido')
      .required('O campo email é obrigatório!'),
    password: yup.string().required('O campo senha é obrigatório!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas não coincidem!')
      .required('O campo confirmar senha é obrigatório'),
  })
  .required();

export default schema;
