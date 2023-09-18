import { Form } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, Controller } from "@components/partials";
import { Title } from "@components/typography";
import helpFormSchema from "./schema";

interface HelpFormValues {
  name: string;
  phone: string;
}

const HelpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
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
    <div className="flex flex-col gap-5">
      <Title variant="h2" size="small" color="dark" className="text-center">
        Ты в одном шаге от профессии
      </Title>
      <Form onFinish={handleSubmit(onSubmit)} noValidate layout="vertical">
        <Controller
          label="👤 Ваше имя"
          control={control as any}
          name="name"
          getInput={(field) => (
            <Input type="name" placeholder="Имя" {...field} />
          )}
        />
        <Controller
          label="☎️ Ваш номер телефона"
          control={control as any}
          name="phone"
          getInput={(field) => (
            <Input type="phone" placeholder="+7 800 555 35 35 " {...field} />
          )}
        />
        <Button
          htmlType="submit"
          disabled={!isValid}
          className="w-full py-4 mt-3"
        >
          Перезвоните мне
        </Button>
      </Form>
    </div>
  );
};

export default HelpForm;
