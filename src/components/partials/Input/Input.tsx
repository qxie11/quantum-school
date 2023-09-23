import { Input as AntdInput, InputProps } from "antd";
import cx from "classnames";

import { forwardRef } from "react";

interface Props extends InputProps {
  className?: string;
}

const Input: React.FC<Props> = forwardRef(({ className, ...rest }) => {
  return <AntdInput className={cx('rounded-3xl py-3', className)} {...rest} />;
});

export default Input;
