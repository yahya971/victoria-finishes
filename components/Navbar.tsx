import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { getAssetPath } from '../utils/paths';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[9998] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={getAssetPath('/assets/logo.png')} alt="Victoria Finishes Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <a href="#" className={`font-serif text-2xl tracking-widest font-bold ${scrolled ? 'text-charcoal' : 'text-charcoal lg:text-white'}`}>
              VICTORIA FINISHES
            </a>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${scrolled ? 'text-gold' : 'text-gold'}`}>
              Wall Covering & More
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gold hover:text-wood transition-colors">
            <Globe size={14} /> EN
          </button>
          
          <a 
            href="#showroom"
            className="bg-gold text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <a 
            href="#showroom"
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${scrolled ? 'border-gold text-gold' : 'border-white text-white'}`}
          >
            Book
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? 'text-charcoal' : 'text-white'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-8 px-6 flex flex-col gap-6 z-[9998]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-charcoal text-lg font-serif font-medium uppercase tracking-widest hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;