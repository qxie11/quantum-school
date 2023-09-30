import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import useTheme from "@hooks/useTheme";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  ref?: ForwardedRef<HTMLParagraphElement>;
  tagName?: keyof JSX.IntrinsicElements;
}

const Text: React.FC<Props> = forwardRef(
  ({ children, className, tagName = "p", ...rest }, ref) => {
    const { isDarkTheme } = useTheme();
    const Tag = tagName as any;

    return (
      <Tag
        className={cx('mb-4', className, {
          "text-white": isDarkTheme,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

export default Text;
