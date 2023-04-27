import { useRef } from "react";
import cx from "classnames";
import { useWindowScrollPosition } from "rooks";
import { Container } from "@components/layout";
import { Nav } from "@components/partials";

import styles from "./styles.module.scss";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useWindowScrollPosition();
  const headerHeight = (headerRef.current as HTMLElement)?.offsetHeight;
  const isHeaderFixed = scrollY > headerHeight;

  return (
    <header
      ref={headerRef}
      className={cx("py-5", styles.header, {
        [styles.headerFixed]: isHeaderFixed,
      })}
    >
      <Container>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
