import cx from "classnames";
import Emoji from "react-emojis";
import { Container } from "@components/layout";
import { Title } from "@components/typography";
import { Section } from "@components/partials";

import styles from "./styles.module.scss";

const IntroSection = () => {
  return (
    <Section
      gradient={[
        {
          width: "570px",
          height: "350px",
          left: "20%",
          top: "50%",
          color: "#b5c9ff",
        },
        {
          width: "791px",
          height: "350px",
          color: "linear-gradient(133.63deg,#fff3b5 14.35%,#c5ff8b 87.65%)",
          left: "60%",
          top: "50%",
        },
      ]}
    >
      <Container>
        <Title className={cx("text-6xl", styles.title)}>
          Quantum School: Обучение web-разработке.
          <br />
          <span>
            <Emoji emoji="graduation-cap" />
            Учись.
          </span>
          <span>
            <Emoji emoji="laptop-computer" />
            Работай.
          </span>
          <span>
            <Emoji emoji="money-with-wings" />
            Зарабатывай.
          </span>
        </Title>
      </Container>
    </Section>
  );
};

export default IntroSection;
