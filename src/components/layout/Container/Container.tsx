import cx from "classnames";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

// Styles
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  ref?: ForwardedRef<HTMLDivElement>;
  className?: string;
}

const Container: React.FC<Props> = forwardRef(
  ({ children, className, ...rest }, ref) => (
    <div className={cx(styles.container, className)} {...rest} ref={ref}>
      {children}
    </div>
  )
);

export default Container;
