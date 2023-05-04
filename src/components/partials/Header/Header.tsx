import useMedia from "@hooks/useMedia";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { lessThanSM } = useMedia();

  const getHeader = () => {
    if (lessThanSM) return <HeaderMobile />;

    return <HeaderDesktop />;
  };

  return getHeader();
};

export default Header;
