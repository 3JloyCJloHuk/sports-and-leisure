import * as yup from 'yup';

const validation = yup.object().shape({
  name: yup.string().required('Укажите имя'),
  mail: yup
    .string()
    .email('Введите действительный адрес электронной почты')
    .required('Электронная почта обязательна'),
  phone: yup
    .string()
    .required('Укажите телефон')
    .matches(/^(?:\+38)?(0\d{9})$/, 'Номер телефона недействителен'),
  message: yup
    .string()
    .required('Укажите адрес')
    .min(10, 'Длина должна быть больше 10 символов')
    .max(100, 'Длина должна быть меньше 100 символов'),
});

export default validation;
