import React, { useState } from 'react';
import { Menu, X, Phone, Package } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Servizi', href: '#services' },
    { name: 'Orari', href: '#hours' },
    { name: 'Recensioni', href: '#reviews' },
    { name: 'Dove Siamo', href: '#map' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Simulating the logo description: Blue wing icon, Orange text */}
            <Package className="h-8 w-8 text-brand-blue mr-2" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-brand-orange leading-none">
                LECCE <span className="text-brand-blue">EXPRESS</span>
              </span>
              <span className="text-xs text-gray-500 tracking-widest font-semibold">CENTRO SPEDIZIONI</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-orange font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0832522635"
              className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all flex items-center shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              0832 522635
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-orange focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0832522635"
              className="block w-full text-center mt-4 bg-brand-orange text-white px-5 py-3 rounded-lg font-bold"
            >
              Chiamaci Ora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
