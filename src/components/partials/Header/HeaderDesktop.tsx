import { useRef } from "react";
import cx from "classnames";
import { Container } from "@components/layout";
import { Logo, Nav, ThemeSwitcher } from "@components/partials";
import useTheme from "@hooks/useTheme";
import useScrollPosition from "@hooks/useScrollPosition";

import styles from "./styles.module.scss";

const HeaderDesktop = () => {
  const { isDarkTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScrollPosition();
  const headerHeight = (headerRef.current as HTMLElement)?.offsetHeight;
  const isHeaderFixed = scrollY > headerHeight;

  return (
    <header
      ref={headerRef}
      className={cx(styles.headerDesktop, "py-5", {
        [styles.headerFixed]: isHeaderFixed,
        [styles.headerDark]: isDarkTheme && !isHeaderFixed,
        [styles.headerDarkTransparent]: isDarkTheme && isHeaderFixed,
      })}
    >
      <Container>
        <div className="flex items-center justify-between gap-10">
          <Logo />
          <Nav highlightActive className="mr-auto" />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default HeaderDesktop;
