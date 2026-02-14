import React from 'react';
import { ShieldCheck, Clock, Star, CloudRain, Check } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'licensed',
    title: 'Fully Licensed & Insured',
    description: 'Complete liability and WCB coverage. We adhere to strict NB safety codes on every single job.',
    icon: ShieldCheck,
  },
  {
    id: 'warranty',
    title: '15-Year Craftsmanship Warranty',
    description: 'We stand behind our work long after we leave. Our warranty covers materials and labor.',
    icon: Clock,
  },
  {
    id: 'local',
    title: 'Born & Raised Here',
    description: 'We know maritime weather. Our roofs are specifically designed to withstand high winds and heavy snow.',
    icon: CloudRain,
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-forest-950 relative overflow-hidden text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-900/50 skew-x-12 transform translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Features */}
            <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1.5 mb-6 border border-forest-800 rounded-full bg-forest-900/50 backdrop-blur-sm">
                    <span className="text-gold-500 font-bold uppercase text-xs tracking-widest">The Paul Roofs Difference</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-none">
                    Why Neighbors <br/> Choose <span className="text-gold-500">Paul?</span>
                </h2>
                <p className="text-forest-200 text-lg mb-12 max-w-md leading-relaxed">
                    Roofing in New Brunswick requires more than just shingles. It requires understanding our unique climate and respecting your property.
                </p>

                <div className="space-y-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                             <div className="flex-shrink-0 w-14 h-14 bg-forest-900 rounded-xl flex items-center justify-center border border-forest-800 group-hover:border-gold-500/50 transition-all duration-300 shadow-lg">
                                <feature.icon size={28} className="text-gold-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-forest-300 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Content - Visual Promo */}
            <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gold-500 rounded-[2.5rem] transform rotate-3 group-hover:rotate-1 transition-transform opacity-100"></div>
                <div className="relative bg-white rounded-[2.5rem] p-2 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
                        <img 
                            src="https://i.ibb.co/xtfBLRr4/IMG-2375.jpg" 
                            alt="Quality Roofing Material" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <div className="flex items-center gap-2 mb-4 text-gold-400">
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                            </div>
                            <blockquote className="text-2xl font-serif font-bold text-white mb-6 leading-tight">
                                "The only roofer in Southern NB I trust with my heritage home. Paul cares about the details."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-forest-950 font-bold">
                                    JD
                                </div>
                                <div>
                                    <div className="font-bold text-white">James D.</div>
                                    <div className="text-forest-300 text-sm">Sussex Corner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-12 -left-8 bg-white p-6 rounded-2xl shadow-xl transform -rotate-6 hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 rounded-full text-green-700">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-forest-900">Material Warranty</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-full text-green-700">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-forest-900">Labor Guarantee</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};