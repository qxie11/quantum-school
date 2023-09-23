import { Input as AntdInput, InputProps } from "antd";
import cx from "classnames";

import styles from "./styles.module.scss";
import { forwardRef } from "react";

interface Props extends InputProps {
  className?: string;
}

const Input: React.FC<Props> = forwardRef(({ className, ...rest }) => {
  return <AntdInput className={cx(styles.input, className)} {...rest} />;
});

export default Input;
