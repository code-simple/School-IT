import React from "react";
import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
