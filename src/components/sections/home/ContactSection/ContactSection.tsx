import Image from "next/image";
import { Section, HelpForm, BgGradient } from "@components/partials";
import { Container } from "@components/layout";
import { Title, Text } from "@components/typography";
import Images from "@assets/images";

const ContactSection = () => {
  return (
    <Section className="bg-[#fff6d6] py-20">
      <Container>
        <div className="flex justify-between items-center gap-6 flex-col lg:flex-row">
          <div className="basis-2/3">
            <div className="flex gap-8 flex-col items-center sm:items-start sm:flex-row">
              <div className="rounded-2xl overflow-hidden w-[265px] shadow-2xl">
                <Image className="h-full" src={Images.karina} alt="photo" />
              </div>
              <div>
                <Title className="mb-8" size="medium" variant="h2">
                  Нужна помощь 🤝 в выборе курса?
                </Title>
                <Text className="mb-12 font-bold">
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
          <div className="basis1/3">
            <div className="relative">
              <HelpForm className="z-[3] rounded-2xl p-12 bg-white shadow-md" />
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
  );
};

export default ContactSection;
