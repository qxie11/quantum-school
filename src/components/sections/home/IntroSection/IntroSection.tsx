import cx from "classnames";
import { Container } from "@components/layout";
import { Title } from "@components/typography";
import { Button, Section } from "@components/partials";

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
        <Title className={cx("text-6xl mb-14", styles.title)}>
          Quantum School: Обучение web-разработке.
          <br />
          <span>🎓 Учись.</span>
          <span>🖥️ Работай.</span>
          <span>💸 Зарабатывай.</span>
        </Title>
        <div className="flex gap-10">
          <Button>🚀 Начать</Button>
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
