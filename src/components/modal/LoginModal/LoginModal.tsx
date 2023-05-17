import { Form, ModalProps } from "antd";
import QSModal from "../QSModal/QSModal";
import { Title } from "@components/typography";

interface Props extends ModalProps {}

const LoginModal: React.FC<Props> = ({ ...rest }) => {
  return (
    <QSModal {...rest}>
      <Title variant="h2" size="medium" color="dark" className="text-center">
        Войти или зарегистрироваться
      </Title>
      <Form layout="vertical"></Form>
    </QSModal>
  );
};

export default LoginModal;
