import * as yup from "yup";

const footerSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Email формат не валиден")
    .required("Поле обязательно")
    .max(120, "Email не должен быть длинее, чем 120 символов"),
});

export default footerSchema;