// import cx from "classnames";
import { Container } from "@components/layout";
import { MappedElems } from "./MappedElems";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="flex flex-row justify-between py-24">
          <MappedElems />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
