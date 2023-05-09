import { Tabs as AntdTabs, TabsProps } from "antd";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

import styles from "./styles.module.scss";

interface Props extends TabsProps {
  className?: string;
}

const Tabs: React.FC<Props> = ({ className, ...rest }) => {
  const { isDarkTheme } = useTheme();

  return (
    <AntdTabs
      className={cx(styles.tabs, { [styles.dark]: isDarkTheme }, className)}
      {...rest}
    />
  );
};

export default Tabs;
