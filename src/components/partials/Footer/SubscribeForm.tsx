import { Form, Button } from "antd";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Controller } from "@components/partials";
import footerSchema from "./schema";

interface SubscribeFormValues {
  email: string;
}

export const SubscribeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<SubscribeFormValues>({
    mode: "all",
    shouldUnregister: false,
    resolver: yupResolver(footerSchema),
  });

  const onSubmit = (values: SubscribeFormValues) => {
    console.log(values);
    reset();
  };

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      noValidate
      layout="vertical"
      className="relative"
    >
      <Controller
        control={control as any}
        name="email"
        getInput={(field) => (
          <Input type="email" placeholder="E-mail" {...field} />
        )}
      />
      <Button
        htmlType="submit"
        disabled={!isValid}
        className="flex justify-center text-center absolute top-0 right-0 rounded-3xl h-11"
      >
        <FiArrowRight className="w-[20px] h-[20px]" />
      </Button>
    </Form>
  );
};
