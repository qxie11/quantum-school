import cx from "classnames";
import { isFirefox } from "react-device-detect";
import { Container } from "@components/layout";
import { Title, Text } from "@components/typography";
import { Button, Section } from "@components/partials";
import useTheme from "@hooks/useTheme";
import useMedia from "@hooks/useMedia";
import { GRADIENTS } from "./constants";

import styles from "./styles.module.scss";

const IntroSection = () => {
  const { isLightTheme } = useTheme();
  const { isXSM } = useMedia();

  return (
    <Section
      className={cx("py-36", {
        [styles.bgGradient]: isFirefox && isLightTheme,
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
            className={cx(styles.span, {
              "mt-[2rem]": isXSM,
            })}
          >
            🎓 Учись.
          </span>
          <span className={styles.span}>🖥️ Работай.</span>
          <span className={styles.span}>💸 Зарабатывай.</span>
        </Title>
        <div className="flex items-center gap-10 flex-wrap">
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
