"use client";

import cx from "classnames";
import React, { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container = forwardRef<HTMLDivElement, Props>(
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

Container.displayName = "Container";

export default Container;
