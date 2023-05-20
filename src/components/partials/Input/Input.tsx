import { Input as AntdInput, InputProps } from "antd";
import cx from "classnames";

import styles from "./styles.module.scss";

interface Props extends InputProps {
  className?: string;
}

const Input: React.FC<Props> = ({ className, ...rest }) => {
  return <AntdInput className={cx(styles.input, className)} {...rest} />;
};

export default Input;
