import * as yup from "yup";
import "yup-phone-lite";

const helpFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Поле обязательно")
    .max(30, "Превышен лимит символов"),
  phone: yup
    .string()
    .trim()
    .phone("RU", "Телефон введён неверно")
    .required('Поле обязательно'),
});

export default helpFormSchema;