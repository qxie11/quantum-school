"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormField, Input } from "@shared/ui";
import { LoginSchema } from "./constants";

interface FormValues {
  email: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <FormField
        className="mb-4"
        label="✉️ Ваш email"
        error={errors.email?.message}
      >
        <Input
          placeholder="future_developer@mail.com"
          type="email"
          error={!!errors.email}
          {...register("email")}
        />
      </FormField>

      <Button className="w-full">
        <FiArrowRight className="w-[30px] h-[30px] mx-auto" />
      </Button>
    </form>
  );
};

export default Login;
