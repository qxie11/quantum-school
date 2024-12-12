"use client";
import ThemeSelectors from "@store/selectors/themeSelectors";
import useActions from "./useActions";
import { useSelector } from "react-redux";

const useTheme = () => {
  const { switchTheme, setTheme } = useActions();
  const isDarkTheme = useSelector(ThemeSelectors.selectTheme);

  return {
    isDarkTheme,
    isLightTheme: !isDarkTheme,
    switchTheme,
    setTheme,
  };
};

export default useTheme;
