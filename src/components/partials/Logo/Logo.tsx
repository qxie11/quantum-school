import Link from "next/link";
import useMedia from "@hooks/useMedia";
import LogoFull from "./LogoFull";
import LogoMini from "./LogoMini";

// https://looka.com - logo generator

const Logo = () => {
  const { isMD } = useMedia();

  return (
    <Link href="/">
      {isMD ? <LogoFull /> : <LogoMini />}
    </Link>
  );
};

export default Logo;
