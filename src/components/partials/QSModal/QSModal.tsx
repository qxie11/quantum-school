import { Modal, ModalProps } from "antd";
import { FiX } from "react-icons/fi";
import cx from "classnames";

import styles from "./styles.module.scss";

interface Props extends ModalProps {
  children: React.ReactNode;
}

const QSModal: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Modal
      centered
      footer={null}
      wrapClassName={cx(styles.wrapper)}
      closeIcon={<FiX className="w-[30px] h-[30px]" />}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default QSModal;
