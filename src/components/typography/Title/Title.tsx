import React, { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  ref?: ForwardedRef<HTMLHeadingElement>;
  size?: "large" | "medium" | "small";
  color?: "dark" | "light";
}

const Title: React.FC<Props> = forwardRef(
  (
    { children, className, variant = "h1", size = "medium", color, ...rest },
    ref
  ) => {
    const { isDarkTheme } = useTheme();
    const TagName = variant;

    return (
      <TagName
        className={cx(styles.title, className, {
          "text-white": color ? color === "light" : isDarkTheme,
          "text-6xl": size === "large",
          "text-4xl": size === "medium",
          "text-2xl": size === "small",
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </TagName>
    );
  }
);

export default Title;
