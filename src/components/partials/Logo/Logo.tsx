import Link from "next/link";
import useMedia from "@hooks/useMedia";
import LogoFull from "./LogoFull";
import LogoMini from "./LogoMini";

// https://looka.com - logo generator

type Props = {
  stableTheme?: "dark" | "light";
  className?: string;
};

const Logo = (props: Props) => {
  const { isMD } = useMedia();

  return (
    <Link href="/">
      {isMD ? <LogoFull {...props} /> : <LogoMini {...props} />}
    </Link>
  );
};

export default Logo;
