import { useState } from "react";
import cx from "classnames";
import { Nav, ThemeSwitcher } from "@components/partials";
import { FiX, FiAlignJustify } from "react-icons/fi";

import styles from "./styles.module.scss";

const HeaderMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {!isActive && (
        <button
          onClick={() => setIsActive(true)}
          className="fixed right-[20px] top-[20px] z-40"
        >
          <FiAlignJustify className="w-[50px] h-[50px]" />
        </button>
      )}
      <div
        className={cx(
          styles.headerMobile,
          "fixed top-0 right-0 bottom-0 left-[15%] z-40",
          "rounded-s-[25px] backdrop-blur-3xl flex flex-col",
          "items-center gap-5 pt-[100px] pb-[40px]",
          {
            [styles.active]: isActive,
          }
        )}
      >
        <button
          onClick={() => setIsActive(false)}
          className="absolute right-[20px] top-[20px]"
        >
          <FiX className="w-[50px] h-[50px]" />
        </button>
        <Nav className="flex-col gap-[10vh]" linksClassName="text-5xl" />
        <ThemeSwitcher className="mt-auto" />
      </div>
    </>
  );
};

export default HeaderMobile;
