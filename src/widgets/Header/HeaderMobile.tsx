import { useState } from "react";
import cx from "classnames";
import { Nav, ThemeSwitcher } from "@widgets/index";
import { FiX, FiAlignJustify } from "react-icons/fi";

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
          `shadow-[-8px_3px_22px_-3px_rgba(#000,0.19)] translate-x-[105%] transition-transform
           duration-[0.5s] ease-[ease]`,
          "fixed top-0 right-0 bottom-0 left-[15%] z-40",
          "rounded-s-[25px] backdrop-blur-3xl flex flex-col",
          "items-center gap-5 pt-[100px] pb-[40px]",
          {
            "translate-x-0": isActive,
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
