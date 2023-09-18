import { Section, HelpForm } from "@components/partials";
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
          <HelpForm />
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
