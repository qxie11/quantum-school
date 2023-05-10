import useWindowSize from "./useWindowSize";
import Breakpoints from "@enums/Breakpoints";

interface IReturnValue {
  isXLG: boolean;
  isLG: boolean;
  isMD: boolean;
  isSM: boolean;
  isXSM: boolean;
}

const useMedia = (): IReturnValue => {
  const { width } = useWindowSize();

  const innerWidth = width as number;

  return {
    isXLG: innerWidth >= Breakpoints.XLG,
    isLG: innerWidth >= Breakpoints.LG,
    isMD: innerWidth >= Breakpoints.MD,
    isSM: innerWidth >= Breakpoints.SM,
    isXSM: innerWidth < Breakpoints.SM,
  };
};

export default useMedia;
