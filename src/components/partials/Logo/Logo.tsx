import Link from "next/link";
import useMedia from "@hooks/useMedia";
import LogoFull from "./LogoFull";
import LogoMini from "./LogoMini";

// https://looka.com - logo generator

const Logo = () => {
  const { lessThanMD } = useMedia();

  return (
    <Link href="/">
      <a>{lessThanMD ? <LogoMini /> : <LogoFull />}</a>
    </Link>
  );
};

export default Logo;
