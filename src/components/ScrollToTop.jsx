// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi path change hoga, window scroll karega top pe
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
