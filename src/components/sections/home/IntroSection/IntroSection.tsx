import cx from "classnames";
import { Container } from "@components/layout";
import { Title } from "@components/typography";
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
        <div className="flex gap-10">
          <Button type="ghost">🚀 Начать</Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            amet.s
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default IntroSection;
