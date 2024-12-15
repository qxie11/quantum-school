"use client";

import { Button } from "@shared/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/ui/Dialog/Dialog";
import { Login } from "@features/index";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>🔐 Войти или зарегистрироваться</DialogTitle>
        </DialogHeader>
        <Login />
      </DialogContent>
      <DialogTrigger asChild>
        <Button size="large">🚀 Начать</Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default LoginModal;
