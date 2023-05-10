import useMedia from "@hooks/useMedia";
import HeaderDesktop from "./HeaderDesktop";
// import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { isSM } = useMedia();

  const getHeader = () => {
    if (isSM) return <HeaderDesktop />;

    return <HeaderDesktop />;
  };

  return getHeader();
};

export default Header;
