"use client";

import cx from "classnames";
import { isFirefox } from "react-device-detect";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Title,
  Text,
  Section,
  BgGradient,
  ImageWrapper,
} from "@shared/ui";
import useTheme from "@hooks/useTheme";
import { LoginModal } from "@widgets/index";
import { GRADIENTS } from "./constants";
import Images from "@shared/assets/images";
import { Contact } from "@features/index";

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
              🎓 Учись. <br className="sm:hidden" /> 🖥️ Работай.{" "}
              <br className="sm:hidden" /> 💸 Зарабатывай.
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
      <Section className="bg-cornsilk py-20 overflow-x-clip">
        <Container>
          <div className="flex justify-between items-center gap-6 flex-col lg:flex-row">
            <div className="basis-2/3">
              <div className="flex gap-8 flex-col items-center sm:items-start sm:flex-row">
                <ImageWrapper className="w-[265px]">
                  <Image
                    src={Images.karina}
                    alt="photo"
                    quality={60}
                    priority
                  />
                </ImageWrapper>
                <div>
                  <Title className="mb-8" size="medium" variant="h2">
                    Нужна помощь 🤝 в выборе курса?
                  </Title>
                  <Text className="mb-4 font-bold">
                    📝Заполни форму и мы свяжемся с тобой как можно скорее
                  </Text>
                  <Text className="mb-4 font-bold">
                    Карина <br />
                    <span className="text-sm font-normal">
                      Карина Руководитель «Службы Заботы»
                    </span>
                  </Text>
                  <Text className="text-lg max-w-xl">
                    Консультация поможет выявить твои сильные стороны. Мы
                    познакомимся и посоветуем, как правильно начать твою новую
                    карьеру.
                  </Text>
                </div>
              </div>
            </div>
            <div className="basis1/3 w-full sm:w-auto">
              <div className="relative">
                <Contact className="z-10" />
                <BgGradient
                  className="z-[1]"
                  width="200px"
                  height="200px"
                  color="#bcffc8"
                  left="0"
                  top="0"
                  animation
                />
                <BgGradient
                  className="z-[1]"
                  width="150px"
                  height="150px"
                  color="#a8bfff"
                  left="50%"
                  top="70%"
                  animation
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
