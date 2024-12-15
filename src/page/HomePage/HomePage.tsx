"use client";

import cx from "classnames";
import { isFirefox } from "react-device-detect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
} from "@shared/ui";
import { Title, Text } from "@components/typography";
import { Section } from "@components/partials";
import useTheme from "@hooks/useTheme";
import { LoginModal } from "@widgets/index";
import { GRADIENTS } from "./constants";

const HomePage = () => {
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
            <LoginModal />
            <Text className="max-w-[10rem]">
              Образовательная платформа твоего будущего
            </Text>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>🤝🏻 Команда</AccordionTrigger>
              <AccordionContent>
                React — это библиотека для создания пользовательских
                интерфейсов, разработанная Facebook.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>⚙️ Система обучения</AccordionTrigger>
              <AccordionContent>
                Tailwind CSS — это утилитарный CSS-фреймворк, который
                предоставляет классы для стилизации.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>📝 Гарантии</AccordionTrigger>
              <AccordionContent>
                Radix предоставляет доступные и стилизуемые компоненты для
                создания интерфейсов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
