"use client";
import cx from "classnames";
import useTheme from "@hooks/useTheme";
import { FiSun } from "react-icons/fi";
import { RxMoon } from "react-icons/rx";

interface Props {
  className?: string;
}

const ThemeSwitcher: React.FC<Props> = ({ className }) => {
  const { isLightTheme, switchTheme } = useTheme();

  return (
    <button
      title={isLightTheme ? "Темная тема" : "Светлая тема"}
      className={cx(
        "p-2 rounded transform transition-transform duration-500 hover:rotate-12",
        className
      )}
      onClick={() => switchTheme()}
    >
      {isLightTheme ? (
        <RxMoon className="w-7 h-7 text-black" />
      ) : (
        <FiSun className="w-7 h-7 text-white" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
