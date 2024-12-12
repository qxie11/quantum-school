"use client";
import { useRef } from "react";
import cx from "classnames";
import { Container } from "@components/layout";
import useTheme from "@hooks/useTheme";
import useScrollPosition from "@hooks/useScrollPosition";
import { ThemeSwitcher, Nav, Logo } from "@widgets/index";

const HeaderDesktop = () => {
  const { isDarkTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScrollPosition();
  const headerHeight = (headerRef.current as HTMLElement)?.offsetHeight;
  const isHeaderFixed = scrollY > headerHeight;

  return (
    <header
      ref={headerRef}
      className={cx(
        "py-5 backdrop-saturate-[180%] backdrop-blur-xl bg-white bg-opacity-30",
        {
          "shadow-[0px_7px_16px_-10px_rgba(34,60,80,0.2)] fixed top-0 right-0 left-0 z-30":
            isHeaderFixed,
          "!bg-darkTheme": isDarkTheme && !isHeaderFixed,
          "bg-darkTheme bg-opacity-30": isDarkTheme && isHeaderFixed,
        }
      )}
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
