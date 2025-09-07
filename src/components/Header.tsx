import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-20 md:h-24 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <Logo className="w-14 h-14 md:w-16 md:h-16" />
      <Navigation invert={!scrolled} />
    </header>
  );
};

export default Header;
