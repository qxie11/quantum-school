import React, { HTMLAttributes } from "react";
import cx from "classnames";
import IBgGradient from "@interfaces/IBgGradient";
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
  return (
    <section
      className={cx(
        {
          relative: gradient,
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
