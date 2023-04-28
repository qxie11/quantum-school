import React, { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  ref?: ForwardedRef<HTMLHeadingElement>;
}

const Title: React.FC<Props> = forwardRef(
  ({ children, className, variant = "h1", ...rest }, ref) => {
    const TagName = variant;

    return (
      <TagName className={cx(styles.title, className)} ref={ref} {...rest}>
        {children}
      </TagName>
    );
  }
);

export default Title;
