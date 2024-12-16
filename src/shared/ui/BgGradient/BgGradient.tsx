import cx from "classnames";

interface Props {
  width: string;
  height: string;
  top?: string;
  left?: string;
  color: string;
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
    className={cx(
      "absolute -z-10 transform translate-x-[-30%] translate-y-[-50%] rotate-[-7.23deg] rounded-full blur-[60px] max-w-full",
      { "animate-bgGradientAnimation": animation },
      className
    )}
  ></div>
);

export default BgGradient;
