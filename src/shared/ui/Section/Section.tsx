import React, { HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";
import IBgGradient from "@models/IBgGradient";
import { BgGradient } from "@shared/ui";

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
  const { isDarkTheme, isLightTheme } = useTheme();

  return (
    <section
      className={cx(
        "pb-24 max-w-[1920px] mx-auto",
        {
          "relative overflow-x-clip overflow-y-visible": gradient,
          "!bg-darkTheme": isDarkTheme,
        },
        className
      )}
      {...rest}
    >
      {children}
      {isLightTheme &&
        gradient?.map((item, i) => <BgGradient key={i} {...item} />)}
    </section>
  );
};

export default Section;
