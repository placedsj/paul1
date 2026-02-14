import React from 'react';
import { ShieldCheck, Clock, Star, Snowflake } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'licensed',
    title: 'Licensed & Insured',
    description: 'Full coverage for your peace of mind. We adhere to strict safety and quality standards on every job.',
    icon: ShieldCheck,
  },
  {
    id: 'warranty',
    title: '10-Year Warranty',
    description: 'We stand by our work. Our comprehensive warranty covers materials and labor for a full decade.',
    icon: Clock,
  },
  {
    id: 'rated',
    title: 'Top-Rated Pros',
    description: 'Voted #1 in customer satisfaction. Our team is trained, certified, and dedicated to excellence.',
    icon: Star,
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-800 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900/50 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Seasonal Promo */}
            <div className="relative group">
                <div className="absolute inset-0 bg-accent-orange rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform opacity-20"></div>
                <div className="relative bg-navy-900 rounded-2xl p-8 md:p-12 border border-white/10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Snowflake size={120} />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                        <Snowflake size={14} />
                        Winter Ready
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">
                        Winter is Coming
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Don't let the harsh weather catch you off guard. Get your roof inspected before the first snowfall to prevent costly leaks and ice dams.
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden relative mb-6">
                         <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnsgcQlfLqf07YGDCt0-2AwpSe-mJPoG6gpeACoHice_wR1YF5chasBPw8t14ltnVD5MFi91waKzgfiKkFvHVAn52izaJwEFAi5UwH0zgLy9pIML2N1unUt115GczTQeQEa0U5A5aSNzDxRnB6MgdHOwpE8o_hWe6RsbMsSzJAkJml3cHZxyEM05yHApJJ5jwCFnQylDqFxno5VrkrOpsra8GeudJbK5kU68Lmm-qoUfpvxrI_s_cvJw8V1JJ5lqXewSyU99MvVssN" 
                            alt="Winter Roof" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                         <div className="absolute bottom-4 left-4 text-white font-display font-bold text-xl">
                            Is your roof ready?
                         </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 font-bold uppercase tracking-widest transition-colors rounded-sm">
                        Schedule Winter Inspection
                    </button>
                </div>
            </div>

            {/* Right Content - Features */}
            <div>
                <h2 className="text-5xl md:text-6xl font-display font-black uppercase text-white mb-12 leading-none">
                    Why Choose <br/> <span className="text-accent-orange">Paul Roofs?</span>
                </h2>

                <div className="space-y-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex gap-6 p-6 bg-navy-900/50 rounded-xl border border-white/5 hover:border-accent-orange/30 transition-colors group">
                             <div className="flex-shrink-0 w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center border-2 border-accent-orange group-hover:bg-accent-orange transition-all duration-300 shadow-lg shadow-orange-900/20">
                                <feature.icon size={32} className="text-accent-orange group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-display font-bold uppercase text-white mb-2">{feature.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};