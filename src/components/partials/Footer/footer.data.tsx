import LogoFull from "../Logo/LogoFull";
import { IconsRow } from "./IconsRow";
import { SubscribeForm } from "./SubscribeForm";

const myForm = <SubscribeForm />;
const myLogo = <LogoFull />;

export const arrayParents = [
  [
    {
      data: myLogo,
      key: 4,
      style: "text-base",
    },
    {
      data: IconsRow,
      key: 5,
      style: "pt-6 pb-20",
    },
    {
      data: "2014-2023 © QuantumSchool",
      key: 6,
      style: "text-sm",
    },
    {
      data: "Договор оферты",
      key: 7,
      style: "text-xs text-zinc-300",
    },
  ],
  [
    {
      data: "Основное",
      key: 8,
      style: "text-base pb-6",
    },
    {
      data: "Главная",
      key: 9,
      style: "text-xs text-zinc-300",
    },
    {
      data: "Курсы",
      key: 10,
      style: "text-xs text-zinc-300",
    },
    {
      data: "События",
      key: 11,
      style: "text-xs text-zinc-300",
    },
    {
      data: "Журнал",
      key: 12,
      style: "text-xs text-zinc-300",
    },
    {
      data: "О платформе",
      key: 13,
      style: "text-xs text-zinc-300",
    },
    {
      data: "Контакты",
      key: 14,
      style: "text-xs text-zinc-300",
    },
  ],
  [
    {
      data: "Подписка на анонсы",
      key: 12,
      style: "text-base",
    },
    {
      data: "Разреши нам присылать тебе уведомления о бесплатных событиях",
      key: 13,
      style: "text-sm",
    },
    {
      data: myForm,
      key: 14,
      style: "text-sm",
    },
    {
      data: "Нажимая на эту кнопку, я даю своё согласие на обработку персональных данных и соглашаюсь с договором оферты",
      key: 15,
      style: "text-sm text-zinc-300",
    },
  ],
  [
    {
      data: "☎️ 8 (800) 555-35-35",
      key: 16,
      style: "text-sm",
    },
    {
      data: "reg@quantumschool.in",
      key: 17,
      style: "text-sm pt-2 pb-6",
    },
    {
      data: "Студентам",
      key: 18,
      style: "text-base",
    },
    {
      data: "Обучение",
      key: 19,
      style: "text-xs text-zinc-300",
    },
    {
      data: "Беспроцентная рассрочка",
      key: 19,
      style: "text-xs text-zinc-300",
    },
    {
      data: "Партнёрская программа",
      key: 19,
      style: "text-xs text-zinc-300",
    },
  ],
];
