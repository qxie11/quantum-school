import React, { HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";
import IBgGradient from "@models/IBgGradient";
import { BgGradient } from "@components/partials";

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
        {
          relative: gradient,
          "bg-dark": isDarkTheme,
        },
        "py-40",
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
