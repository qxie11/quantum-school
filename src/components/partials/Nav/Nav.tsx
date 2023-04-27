import cx from "classnames";
import { useRouter } from "next/router";
import { Anchor } from "@components/typography";
import { NAV_LINKS } from "./constants";

import styles from "./styles.module.scss";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={cx("flex gap-12 items-center")}>
      {NAV_LINKS.map(({ text, href }) => {
        const isActive = router.route === href;
        return (
          <Anchor
            className={cx(styles.link, {
              [styles.active]: isActive,
            })}
            underlineAnimation={!isActive}
            key={href}
            href={href}
          >
            {text}
          </Anchor>
        );
      })}
    </nav>
  );
};

export default Nav;
