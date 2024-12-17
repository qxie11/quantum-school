import React, { forwardRef, HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "large" | "medium" | "small";
  color?: "dark" | "light";
}

const Title = forwardRef<HTMLHeadingElement, Props>(
  (
    { children, className, variant = "h1", size = "medium", color, ...rest },
    ref
  ) => {
    const { isDarkTheme } = useTheme();
    const TagName = variant;

    return (
      <TagName
        className={cx("font-jost font-bold", className, {
          "text-white": color ? color === "light" : isDarkTheme,
          "text-5xl": size === "large",
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

Title.displayName = "Title";

export default Title;
