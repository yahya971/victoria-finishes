import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { getAssetPath } from '../utils/paths';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on home page or not
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (href: string | undefined, e: React.MouseEvent) => {
    e.preventDefault();

    if (!href) return;

    // If it's a hash link (section on home page)
    if (href.startsWith('#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        // Already on home, just scroll
        scrollToSection(href);
      }
    } else {
      // It's a route link (like /products/italian-decorative-paint)
      navigate(href);
    }

    setIsOpen(false);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed w-full z-[9998] transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={getAssetPath('/assets/logo3.png')} alt="Victoria Finishes Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              {item.dropdown ? (
                // Dropdown Menu Item
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // On click, scroll to products section
                      handleNavClick('#products', e);
                    }}
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors ${
                      scrolled || !isHomePage ? 'text-charcoal' : 'text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white shadow-2xl rounded-xl overflow-hidden z-[9999]"
                      >
                        <div className="p-2 grid grid-cols-2 gap-1">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <motion.button
                              key={dropdownItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.2 }}
                              onClick={(e) => dropdownItem.enabled && handleNavClick(dropdownItem.href, e)}
                              disabled={!dropdownItem.enabled}
                              className={`group flex items-center justify-between w-full px-5 py-3.5 text-sm rounded-lg transition-all duration-200 ${
                                dropdownItem.enabled
                                  ? 'text-charcoal hover:bg-gold hover:text-white hover:shadow-md cursor-pointer'
                                  : 'text-gray-400 cursor-not-allowed bg-gray-50/50'
                              }`}
                            >
                              <div className="flex flex-col items-start">
                                <span className="font-medium">{dropdownItem.label}</span>
                                {!dropdownItem.enabled && (
                                  <span className="text-xs mt-0.5 opacity-60">Coming Soon</span>
                                )}
                              </div>
                              {dropdownItem.enabled && (
                                <ArrowRight
                                  size={16}
                                  className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Regular Menu Item
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors ${
                    scrolled || !isHomePage ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gold hover:text-wood transition-colors">
            <Globe size={14} /> EN
          </button>

          <a
            href="#showroom"
            onClick={(e) => handleNavClick('#showroom', e)}
            className="bg-gold text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="#showroom"
            onClick={(e) => handleNavClick('#showroom', e)}
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${scrolled || !isHomePage ? 'border-gold text-gold' : 'border-white text-white'}`}
          >
            Book
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled || !isHomePage ? 'text-charcoal' : 'text-white'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-8 px-6 flex flex-col gap-6 z-[9998]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }}
                    className="flex items-center justify-between w-full text-charcoal text-lg font-serif font-medium uppercase tracking-widest hover:text-gold"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="mt-4 ml-4 space-y-3">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={(e) => dropdownItem.enabled && handleNavClick(dropdownItem.href, e)}
                          disabled={!dropdownItem.enabled}
                          className={`block text-left text-sm ${
                            dropdownItem.enabled
                              ? 'text-gray-700 hover:text-gold'
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {dropdownItem.label}
                          {!dropdownItem.enabled && <span className="text-xs ml-2">(Coming Soon)</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-charcoal text-lg font-serif font-medium uppercase tracking-widest hover:text-gold"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;