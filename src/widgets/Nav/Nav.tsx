"use client";

import { usePathname } from "next/navigation";
import { Anchor } from "@shared/ui";
import cx from "classnames";
import { NAV_LINKS } from "./constants";

interface Props {
  className?: string;
  linksClassName?: string;
  highlightActive?: boolean;
}

const Nav: React.FC<Props> = ({
  className,
  linksClassName,
  highlightActive,
}) => {
  const pathname = usePathname();

  return (
    <nav className={cx("flex gap-12 items-center", className)}>
      {NAV_LINKS.map(({ text, href }) => {
        const isActive = pathname === href;
        return (
          <Anchor
            className={cx(
              "transition-all duration-300",
              {
                "text-white bg-primary shadow-md shadow-primary/50 py-2 px-7 rounded-full hover:scale-x-110":
                  isActive && highlightActive,
              },
              linksClassName
            )}
            underlineAnimation={!isActive || !highlightActive}
            key={href}
            href={href}
          >
            {text}
          </Anchor>
        );
      })}
    </nav>
  );
};

export default Nav;
