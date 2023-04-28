import React from "react";
import cx from "classnames";
import IBgGradient from "@interfaces/IBgGradient";

import styles from "./styles.module.scss";

interface Props extends IBgGradient {
  className?: string;
}

const BgGradient: React.FC<Props> = ({
  width,
  height,
  top,
  left,
  color,
  className,
}) => (
  <div
    style={{ width, height, top, left, background: color }}
    className={cx(styles.bg, className)}
  ></div>
);

export default BgGradient;
