import * as yup from "yup";

const helpFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Поле обязательно")
    .max(30, "Превышен лимит символов"),
  phone: yup
    .string()
    .trim()
    .matches(/^\+[1-9]\d{1,14}$/, "Телефон введён неверно")
    .required('Поле обязательно'),
});

export default helpFormSchema;