import cx from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import helpFormSchema from "./schema";
import { Button, FormField, Input, PhoneInput, Title } from "@shared/ui";

interface HelpFormValues {
  name: string;
  phone: string;
}

type Props = {
  className?: string;
};

const Contact = ({ className }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    reset,
  } = useForm<HelpFormValues>({
    mode: "all",
    shouldUnregister: false,
    resolver: yupResolver(helpFormSchema),
  });

  const onSubmit = (values: HelpFormValues) => {
    console.log(values);
    reset();
  };

  return (
    <div className={cx("flex flex-col gap-5 relative", className)}>
      <Title variant="h2" size="small" className="text-center">
        Ты в одном шаге от профессии
      </Title>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <FormField
          className="mb-4"
          label="👤 Ваше имя"
          error={errors.name?.message}
        >
          <Input
            placeholder="Будущий Разработчик"
            type="name"
            error={!!errors.name}
            {...register("name")}
          />
        </FormField>
        <FormField
          className="mb-4"
          label="☎️ Ваш номер телефона"
          error={errors.phone?.message}
        >
          <PhoneInput
            placeholder="Номер телефона"
            error={!!errors.phone}
            {...register("phone")}
          />
        </FormField>

        <Button className="w-full" type="submit" disabled={!isValid}>
          Перезвоните мне
        </Button>
      </form>
    </div>
  );
};

export default Contact;
