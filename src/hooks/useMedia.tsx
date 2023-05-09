import useWindowSize from "./useWindowSize";
import Breakpoints from "@enums/Breakpoints";

const useMedia = () => {
  const { width } = useWindowSize();

  const innerWidth = width as number;

  return {
    isXLG: innerWidth >= Breakpoints.XLG,
    isLG: innerWidth >= Breakpoints.LG && innerWidth < Breakpoints.XLG,
    isMD: innerWidth >= Breakpoints.MD && innerWidth < Breakpoints.LG,
    isSM: innerWidth >= Breakpoints.SM && innerWidth < Breakpoints.MD,
    isXSM: innerWidth < Breakpoints.SM,
    lessThanXLG: innerWidth < Breakpoints.XLG,
    lessThanLG: innerWidth < Breakpoints.LG,
    lessThanMD: innerWidth < Breakpoints.MD,
    lessThanSM: innerWidth < Breakpoints.SM,
  };
};

export default useMedia;
