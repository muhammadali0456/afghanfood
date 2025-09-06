import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-background/80 backdrop-blur-sm">
      <Logo className="w-16 h-16" />
      <Navigation />
    </header>
  );
};

export default Header;
