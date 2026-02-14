import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About Paul', href: '#hero' },
  { label: 'Our Community', href: '#community' },
  { label: 'Projects', href: '#contact' }, // Mapped to contact for demo flow
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
                <Home size={32} className="text-forest-900 fill-forest-900/10" strokeWidth={1.5} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
                <span className="font-serif font-black text-2xl tracking-tight leading-none text-forest-900">
                    Paul <span className="text-forest-800">Roofs</span>
                </span>
            </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-forest-900 hover:text-gold-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold-500 text-forest-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-gold-600 hover:text-white transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            Get a Free Estimate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-forest-900 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }} 
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif font-bold text-white hover:text-gold-500"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 bg-gold-500 text-forest-900 px-8 py-4 text-lg font-bold rounded-full"
        >
          Get a Free Estimate
        </a>
      </div>
    </nav>
  );
};