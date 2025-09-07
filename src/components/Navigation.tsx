import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavigationProps = {
  invert?: boolean;
};

const Navigation = ({ invert = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = cn(
    "font-medium text-lg transition-colors",
    invert ? "text-white hover:text-primary/90" : "text-spice-brown hover:text-primary"
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12 mr-8">
        <a href="#" className={linkClass}>
          Home
        </a>
        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={linkClass}
        >
          Menu
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={linkClass}
        >
          About
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle menu"
        className={cn("md:hidden", invert ? "text-white" : "text-spice-brown")}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background shadow-lg md:hidden">
          <div className="flex flex-col py-4">
            <a href="#" className="px-6 py-3 text-spice-brown font-medium text-lg hover:bg-muted">
              Home
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="px-6 py-3 text-spice-brown font-medium text-lg hover:bg-muted"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="px-6 py-3 text-spice-brown font-medium text-lg hover:bg-muted"
            >
              About
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;