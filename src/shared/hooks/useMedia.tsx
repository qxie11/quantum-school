"use client";

import useWindowSize from "./useWindowSize";
import Breakpoints from "@entities/enums/Breakpoints";

const useMedia = () => {
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
