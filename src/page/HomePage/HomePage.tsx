"use client";

import { useState } from "react";
import cx from "classnames";
import { isFirefox } from "react-device-detect";
import { Container } from "@components/layout";
import { Title, Text } from "@components/typography";
import { Button, Section } from "@components/partials";
import { LoginModal } from "@components/modal";
import useTheme from "@hooks/useTheme";
import useMedia from "@hooks/useMedia";
import { GRADIENTS } from "./constants";

const HomePage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLightTheme } = useTheme();
  const { isXSM } = useMedia();

  return (
    <main>
      <Section
        className={cx("py-36", {
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
            Quantum School: Обучение web-разработке.
            <br />
            <span
              className={cx("", {
                "mt-[2rem]": isXSM,
              })}
            >
              🎓 Учись.
            </span>
            <span className="">🖥️ Работай.</span>
            <span className="">💸 Зарабатывай.</span>
          </Title>
          <div className="flex items-center gap-10 flex-wrap">
            <Button onClick={() => setIsLoginModalOpen(true)}>🚀 Начать</Button>
            <Text className="max-w-[10rem] mb-0">
              Образовательная платформа твоего будущего
            </Text>
          </div>
        </Container>
        {isLoginModalOpen && (
          <LoginModal
            open={isLoginModalOpen}
            onCancel={() => setIsLoginModalOpen(false)}
          />
        )}
      </Section>
    </main>
  );
};

export default HomePage;
