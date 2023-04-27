import Link, { LinkProps } from "next/link";
import React, { ForwardedRef, HTMLAttributes } from "react";
import cx from "classnames";

// Styles
import styles from "./styles.module.scss";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  light?: boolean;
  external?: boolean;
  className?: string;
  underlineAnimation?: boolean;
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const Anchor: React.FC<Props> = React.forwardRef(
  (
    { children, className, external, underlineAnimation = true, href, ...rest },
    ref
  ) => {
    const classNames = cx(styles.link, className, {
      [styles.underlineAnimation]: underlineAnimation,
    });

    if (external) {
      return (
        <a className={classNames} href={href} ref={ref} {...rest}>
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} {...rest}>
          <a className={classNames} ref={ref}>
            {children}
          </a>
        </Link>
      );
    }
  }
);

export default Anchor;
