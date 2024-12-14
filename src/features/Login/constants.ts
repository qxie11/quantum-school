import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email("Некорректный email").required("Email обязателен"),
});
