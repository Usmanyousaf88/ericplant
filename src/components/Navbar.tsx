import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">TikTok Pro</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tjanster" className="text-secondary-dark hover:text-primary transition-colors">Tjänster</a>
            <a href="#om-oss" className="text-secondary-dark hover:text-primary transition-colors">Om oss</a>
            <a href="#kontakt" className="text-secondary-dark hover:text-primary transition-colors">Kontakt</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
              Kom igång
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-dark hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#tjanster"
                className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tjänster
              </a>
              <a
                href="#om-oss"
                className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Om oss
              </a>
              <a
                href="#kontakt"
                className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
              <button 
                className="w-full text-left block px-3 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kom igång
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;