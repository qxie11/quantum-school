import Link, { LinkProps } from "next/link";
import React, { ForwardedRef, HTMLAttributes } from "react";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  light?: boolean;
  external?: boolean;
  className?: string;
  underlineAnimation?: boolean;
  target?: "_blank";
}

const Anchor = React.forwardRef<HTMLAnchorElement, Props>(
  (
    { children, className, external, underlineAnimation = true, href, ...rest },
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const { isDarkTheme } = useTheme();

    const classNames = cx(
      "cursor-pointer font-medium transition relative",
      {
        "text-white hover:text-white": isDarkTheme,
        "after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:transition-all after:duration-400 after:w-0 hover:after:w-full":
          underlineAnimation,
      },
      className
    );

    if (external) {
      return (
        <a className={classNames} href={href} ref={ref} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} passHref legacyBehavior>
        <a className={classNames} ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  }
);

Anchor.displayName = "Anchor";

export default Anchor;
