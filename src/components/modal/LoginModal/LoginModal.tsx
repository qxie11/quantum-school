import { Form, ModalProps } from "antd";
import { QSModal } from "@components/modal";
import { useForm } from "react-hook-form";
import { Input, Button, Controller } from "@components/partials";
import { Title } from "@components/typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiArrowRight } from "react-icons/fi";
import loginModalSchema from "./schema";

interface LoginModalFormValues {
  email: string;
}

interface Props extends ModalProps {}

const LoginModal: React.FC<Props> = ({ ...rest }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginModalFormValues>({
    mode: "all",
    shouldUnregister: false,
    resolver: yupResolver(loginModalSchema),
  });

  const onSubmit = (values: LoginModalFormValues) => {
    console.log(values);
  };

  return (
    <QSModal {...rest}>
      <Title variant="h2" size="medium" color="dark" className="text-center">
        🔐 Войти или зарегистрироваться
      </Title>
      <Form onFinish={handleSubmit(onSubmit)} noValidate layout="vertical">
        <Controller
          label="✉️ Ваш email"
          control={control}
          name="email"
          getInput={(field) => (
            <Input type="email" placeholder="frontdev@mail.com" {...field} />
          )}
        />
        <Button
          htmlType="submit"
          disabled={!isValid}
          className="!w-full !py-4 mt-8"
        >
          <FiArrowRight className="w-[30px] h-[30px] mx-auto" />
        </Button>
      </Form>
    </QSModal>
  );
};

export default LoginModal;
