import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(document.body.scrollTop);
      };
      document.body.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => document.body.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return {
    scrollY,
  };
};

export default useScrollPosition;
