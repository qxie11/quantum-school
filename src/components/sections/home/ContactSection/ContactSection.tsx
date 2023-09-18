import { Section, HelpForm, BgGradient } from "@components/partials";
import { Container } from "@components/layout";
import { Title, Text } from "@components/typography";

const ContactSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-5 w-2/3">
            {/* <img src="" alt="" /> */}
            <div>
              <Title variant="h2">Нужна помощь 🤝 в выборе курса?</Title>
              <Text>
                📝Заполни форму и мы свяжемся с тобой как можно скорее
              </Text>
              <Text className="text-lg">
                Консультация поможет выявить твои сильные стороны. Мы
                познакомимся и посоветуем, как правильно начать твою новую
                карьеру.
              </Text>
            </div>
          </div>
          <div className="relative">
            <HelpForm />
            <BgGradient
              width="200px"
              height="200px"
              color="#bcffc8"
              left="0"
              top="0"
              animation
            />
            <BgGradient
              width="150px"
              height="150px"
              color="#a8bfff"
              left="40%"
              top="40%"
              animation
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
