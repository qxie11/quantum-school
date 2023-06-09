import React, { HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";
import IBgGradient from "@models/IBgGradient";
import { BgGradient } from "@components/partials";

import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  gradient?: IBgGradient[];
}

const Section: React.FC<Props> = ({
  children,
  className,
  gradient,
  ...rest
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <section
      className={cx(
        styles.section,
        {
          relative: gradient,
          "bg-dark": isDarkTheme,
        },
        className
      )}
      {...rest}
    >
      {gradient?.map((item) => (
        <BgGradient key={item.color} {...item} />
      ))}
      {children}
    </section>
  );
};

export default Section;
