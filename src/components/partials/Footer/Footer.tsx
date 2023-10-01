import { Container } from "@components/layout";
import { Logo, Nav } from "@components/partials";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { Anchor, Title, Text } from "@components/typography";

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
            <Nav
              className="flex-col !items-start gap-2"
              linksClassName="!text-gray-200"
            />
          </div>
          <div>
            <Title className="mb-8 text-lg" variant="h3" color="light">
              Подпииска на анонсы
            </Title>
            <Text>
              Разреши нам присылать тебе уведомления о бесплатных событиях
            </Text>
            <Text className="text-gray-200">
              Нажимая на эту кнопку я даю согласие на обработку своих{" "}
              <Anchor
                className="text-white  hover:text-white hover:underline"
                href="https://google.com"
                external
                underlineAnimation={false}
                target="_blank"
                >
                персональных данных
              </Anchor>{" "}
              и соглашаюсь с{" "}
              <Anchor
                className="text-white  hover:text-white hover:underline"
                href="https://google.com"
                external
                underlineAnimation={false}
                target="_blank"
              >
                договором оферты
              </Anchor>
            </Text>
          </div>
          <div>
            <Anchor
              className="text-white hover:text-white text-3xl mb-8 inline-block"
              external
              href="tel:+42012332123"
            >
              +420 12 33 21 23
            </Anchor>
            <br />
            <Anchor
              className="text-white hover:text-white inline-block"
              external
              href="mailto:mail@mail.com"
            >
              mail@mail.com
            </Anchor>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
