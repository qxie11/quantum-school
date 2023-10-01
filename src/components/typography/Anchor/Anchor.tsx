import Link, { LinkProps } from "next/link";
import React, { ForwardedRef, HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

// Styles
import styles from "./styles.module.scss";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  light?: boolean;
  external?: boolean;
  className?: string;
  underlineAnimation?: boolean;
  target?: "_blank";
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const Anchor: React.FC<Props> = React.forwardRef(
  (
    { children, className, external, underlineAnimation = true, href, ...rest },
    ref
  ) => {
    const { isDarkTheme } = useTheme();
    const classNames = cx(
      "cursor-pointer font-medium transition",
      styles.link,
      {
        [styles.underlineAnimation]: underlineAnimation,
        "text-white": isDarkTheme,
        "hover:text-white": isDarkTheme,
      },
      className,
    );

    if (external) {
      return (
        <a className={classNames} href={href} ref={ref} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classNames} ref={ref} href={href} {...rest}>
        {children}
      </Link>
    );
  }
);

export default Anchor;
