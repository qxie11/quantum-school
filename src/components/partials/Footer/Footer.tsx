import { Container } from "@components/layout";
import { Logo, Nav } from "@components/partials";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { Anchor, Title } from "@components/typography";

const Footer = () => {
  return (
    <footer className="bg-darkTheme text-white py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="mb-12">
              <Logo stableTheme="dark" />
            </div>
            <ul className="flex gap-4 mb-20">
              <li>
                <a
                  className="text-white"
                  href="https://google.com"
                  target="_blank"
                >
                  <FaTelegramPlane className="w-[23px] h-[23px]" fill="white" />
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://google.com"
                  target="_blank"
                >
                  <AiFillYoutube className="w-[23px] h-[23px]" fill="white" />
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://google.com"
                  target="_blank"
                >
                  <AiFillInstagram className="w-[23px] h-[23px]" fill="white" />
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://google.com"
                  target="_blank"
                >
                  <SlSocialVkontakte
                    className="w-[23px] h-[23px]"
                    fill="white"
                  />
                </a>
              </li>
            </ul>
            <Anchor
              className="!text-sm !text-gray-400 !font-normal"
              target="_blank"
              href="https://google.com"
              external
            >
              Договор оферты
            </Anchor>
          </div>
          <div>
            <Title className="mb-8" variant="h3" size="small" color="light">
              Основное
            </Title>
            <Nav />
          </div>
          <div>1</div>
          <div>1</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
