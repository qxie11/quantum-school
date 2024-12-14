"use client";
import cx from "classnames";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  ref?: ForwardedRef<HTMLDivElement>;
  className?: string;
}

const Container: React.FC<Props> = forwardRef(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("max-w-[1400px] px-6 mx-auto", className)}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Container;
