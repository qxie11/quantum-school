import React from "react";
import cx from "classnames";
import IBgGradient from "@models/IBgGradient";

import styles from "./styles.module.scss";

interface Props extends IBgGradient {
  className?: string;
  animation?: boolean;
}

const BgGradient: React.FC<Props> = ({
  width,
  height,
  top,
  left,
  color,
  className,
  animation = false,
}) => (
  <div
    style={{ width, height, top, left, background: color }}
    className={cx(styles.bg, className, {
      [styles.animation]: animation,
    })}
  ></div>
);

export default BgGradient;
