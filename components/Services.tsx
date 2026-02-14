import React from 'react';
import { Hammer, Home, Droplets, Siren, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Roof Repair',
    description: 'Fix leaks and damage efficiently. We ensure your roof remains watertight.',
    icon: Hammer,
  },
  {
    id: 'install',
    title: 'New Installation',
    description: 'Durable and stylish roofing systems tailored to your home\'s architecture.',
    icon: Home,
  },
  {
    id: 'gutter',
    title: 'Gutter Maint.',
    description: 'Keep your water flow clear. Essential prevention for foundation damage.',
    icon: Droplets,
  },
  {
    id: 'emergency',
    title: 'Emergency 24/7',
    description: 'Support for urgent repairs. When disaster strikes, we are on the way.',
    icon: Siren,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-forest-900">Comprehensive Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-cream-50 p-8 rounded-3xl border border-cream-200 hover:border-gold-500/30 transition-all duration-500 hover:shadow-soft hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon size={24} className="text-forest-900 group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-forest-900 mb-3 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-forest-800/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 cursor-pointer group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};