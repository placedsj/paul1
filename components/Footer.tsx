import React from 'react';
import { Home, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 py-16 text-white border-t border-forest-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="relative">
                        <Home size={24} className="text-white" strokeWidth={1.5} />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold-500 rounded-full"></div>
                    </div>
                    <span className="font-serif font-bold text-2xl">Paul Roofs</span>
                </div>
                <p className="text-forest-300 text-sm leading-relaxed mb-6">
                    Reliable roofing solutions for Damascus and Southern New Brunswick. Quality you can trust, from a neighbour you know.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-all">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-all">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-gold-500">Company</h4>
                <ul className="space-y-4 text-forest-300">
                    <li><a href="#hero" className="hover:text-white transition-colors">About Paul</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                    <li><a href="#community" className="hover:text-white transition-colors">Service Area</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Get a Quote</a></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-gold-500">Services</h4>
                <ul className="space-y-4 text-forest-300">
                    <li><a href="#" className="hover:text-white transition-colors">Roof Repairs</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Shingle Replacement</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Emergency Leaks</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Gutter Guards</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-gold-500">Contact Us</h4>
                <ul className="space-y-4 text-forest-300">
                    <li className="flex gap-3">
                         <span className="text-white">📍</span>
                         <span>Damascus, New Brunswick<br/>Serving Southern NB</span>
                    </li>
                    <li className="flex gap-3">
                         <span className="text-white">📞</span>
                         <a href="tel:5062714162" className="hover:text-white">(506) 271-4162</a>
                    </li>
                    <li className="flex gap-3">
                         <span className="text-white">✉️</span>
                         <a href="mailto:info@paulroofs.com" className="hover:text-white">info@paulroofs.com</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-forest-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest-500">
            <p>© 2024 Paul Roofs. All rights reserved.</p>
            <p className="font-bold tracking-widest text-forest-700">#BETTERCALLPAUL</p>
        </div>
      </div>
    </footer>
  );
};