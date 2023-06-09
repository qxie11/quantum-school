import React from "react";
import cx from "classnames";
import { Button as AntdButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import useTheme from "@hooks/useTheme";

import styles from "./styles.module.scss";

interface Props extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "ghost";
}

const Button: React.FC<Props> = ({
  children,
  className,
  type = "primary",
  ...rest
}) => {
  const { isDarkTheme } = useTheme();
  return (
    <AntdButton
      {...rest}
      className={cx(
        styles.btn,
        {
          [styles.primary]: type === "primary",
          [styles.ghost]: type === "ghost",
          "text-white": type === "ghost" && isDarkTheme,
        },
        className
      )}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
