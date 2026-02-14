import React from 'react';
import { Home } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
           <div className="flex items-center gap-2">
                <Home className="text-gold-500" size={24} />
                <span className="font-serif font-bold text-2xl">Paul Roofs</span>
            </div>
            
            <ul className="flex flex-wrap gap-8 font-medium text-forest-200">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest-400">
            <p>© 2024 Paul Roofs. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};