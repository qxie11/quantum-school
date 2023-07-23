import ICollapse from "@models/ICollapse";
import type { CollapseProps } from "antd";
import { Collapse as AntdCollapse } from "antd";
import cx from "classnames";
import useTheme from "@hooks/useTheme";

import styles from "./styles.module.scss";

const { Panel } = AntdCollapse;

interface Props extends CollapseProps {
  items: ICollapse[];
}

const Collapse = ({ items, ...rest }: Props) => {
  const { isDarkTheme } = useTheme();

  return (
    <AntdCollapse
      className={cx(styles.collapse, {
        [styles.dark]: isDarkTheme,
      })}
      {...rest}
    >
      {items.map((panel) => (
        <Panel header={panel.header} key={panel.key}>
          {panel.children}
        </Panel>
      ))}
    </AntdCollapse>
  );
};

export default Collapse;
