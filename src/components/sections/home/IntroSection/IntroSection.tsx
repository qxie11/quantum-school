import cx from "classnames";
import { Container } from "@components/layout";
import { Title, Text } from "@components/typography";
import { Button, Section } from "@components/partials";
import useTheme from "@hooks/useTheme";
import { GRADIENTS } from "./constants";

import styles from "./styles.module.scss";

const IntroSection = () => {
  const { isLightTheme } = useTheme();

  return (
    <Section
      {...(isLightTheme && {
        gradient: GRADIENTS,
      })}
    >
      <Container>
        <Title className={cx("text-6xl mb-14", styles.title)}>
          Quantum School: Обучение web-разработке.
          <br />
          <span>🎓 Учись.</span>
          <span>🖥️ Работай.</span>
          <span>💸 Зарабатывай.</span>
        </Title>
        <div className="flex items-center gap-10">
          <Button>🚀 Начать</Button>
          <Text className="max-w-[10rem] mb-0">
            Образовательная платформа твоего будущего
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default IntroSection;
