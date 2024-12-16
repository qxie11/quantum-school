import React, { forwardRef, HTMLAttributes, ElementType, Ref } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

interface Props<T extends ElementType = "p">
  extends HTMLAttributes<React.ElementRef<T>> {
  className?: string;
  tagName?: T;
}

const Text = forwardRef(
  <T extends ElementType = "p">(
    { children, className, tagName, ...rest }: Props<T>,
    ref: Ref<React.ElementRef<T>>
  ) => {
    const { isDarkTheme } = useTheme();

    const Tag = tagName || "p";

    return (
      // @ts-ignore
      <Tag
        ref={ref}
        className={cx(className, {
          "text-white": isDarkTheme,
        })}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";

export default Text;
