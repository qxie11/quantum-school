"use client";

import { useState } from "react";
import cx from "classnames";
import { isFirefox } from "react-device-detect";
import { Button, Container } from "@shared/ui";
import { Title, Text } from "@components/typography";
import { Section } from "@components/partials";
// import { LoginModal } from "@components/modal";
import useTheme from "@hooks/useTheme";
import { GRADIENTS } from "./constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/ui/Dialog/Dialog";
import { Login } from "@features/index";

const HomePage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLightTheme } = useTheme();

  return (
    <main>
      <Section
        className={cx("!py-36", {
          "[background:linear-gradient(133.63deg,#fff3b5_14.35%,#c5ff8b_87.65%)]":
            isFirefox && isLightTheme,
        })}
        {...(!isFirefox &&
          isLightTheme && {
            gradient: GRADIENTS,
          })}
      >
        <Container>
          <Title size="large" className="mb-14">
            <span>Quantum School: Обучение web-разработке.</span>
            <br />
            <span className="max-sm:text-2xl">
              🎓 Учись. 🖥️ Работай. 💸 Зарабатывай.
            </span>
          </Title>
          <div className="flex items-center gap-10 flex-wrap">
            <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
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
            <Text className="max-w-[10rem]">
              Образовательная платформа твоего будущего
            </Text>
          </div>
        </Container>
        {/* {isLoginModalOpen && (
          <LoginModal
            open={isLoginModalOpen}
            onCancel={() => setIsLoginModalOpen(false)}
          />
        )} */}
      </Section>
    </main>
  );
};

export default HomePage;
