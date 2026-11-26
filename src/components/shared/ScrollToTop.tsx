import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // `key` change à chaque navigation, même vers l'ancre déjà affichée
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Laisse la page se rendre avant de viser l'ancre
    const timer = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
