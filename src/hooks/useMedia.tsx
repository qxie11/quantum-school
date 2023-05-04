import { useWindowSize } from "rooks";
import Breakpoints from "@enums/Breakpoints";

const useMedia = () => {
  const { innerWidth } = useWindowSize();

  const innerWindowWidth = innerWidth as number;

  return {
    isXLG: innerWindowWidth >= Breakpoints.XLG,
    isLG:
      innerWindowWidth >= Breakpoints.LG && innerWindowWidth < Breakpoints.XLG,
    isMD:
      innerWindowWidth >= Breakpoints.MD && innerWindowWidth < Breakpoints.LG,
    isSM:
      innerWindowWidth >= Breakpoints.SM && innerWindowWidth < Breakpoints.MD,
    isXSM: innerWindowWidth < Breakpoints.SM,
    lessThanXLG: innerWindowWidth < Breakpoints.XLG,
    lessThanLG: innerWindowWidth < Breakpoints.LG,
    lessThanMD: innerWindowWidth < Breakpoints.MD,
    lessThanSM: innerWindowWidth < Breakpoints.SM,
  };
};

export default useMedia;
