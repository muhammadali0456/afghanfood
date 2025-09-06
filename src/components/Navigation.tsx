import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12 mr-8">
        <a href="#" className="text-spice-brown font-medium text-lg hover:text-primary transition-colors">
          Home
        </a>
        <a href="#menu" onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-spice-brown font-medium text-lg hover:text-primary transition-colors">
          Menu
        </a>
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-spice-brown font-medium text-lg hover:text-primary transition-colors">
          About
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-spice-brown"
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
            <a href="#menu" onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="px-6 py-3 text-spice-brown font-medium text-lg hover:bg-muted">
              Menu
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="px-6 py-3 text-spice-brown font-medium text-lg hover:bg-muted">
              About
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;