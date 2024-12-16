import cx from "classnames";

type Props = {
  children: JSX.Element;
  className?: string;
};

const ImageWrapper = ({ children, className }: Props) => {
  return (
    <div className={cx("rounded-2xl overflow-hidden shadow-2xl", className)}>
      {children}
    </div>
  );
};

export default ImageWrapper;
