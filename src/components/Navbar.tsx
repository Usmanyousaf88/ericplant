import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <Zap className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Tikwave</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#tjanster" className="text-secondary-dark hover:text-primary transition-all duration-300 text-sm tracking-wide">
              TikTok byrå
            </a>
            <a href="#om-oss" className="text-secondary-dark hover:text-primary transition-all duration-300 text-sm tracking-wide">
              Våra kreatörer
            </a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-300 text-sm tracking-wide shadow-lg shadow-primary/20">
              Kontakta oss
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
          <div className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#tjanster"
                className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                TikTok byrå
              </a>
              <a
                href="#om-oss"
                className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Våra kreatörer
              </a>
              <button 
                className="w-full text-left block px-3 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Kontakta oss
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;