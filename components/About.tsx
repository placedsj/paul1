import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Composition */}
            <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://i.ibb.co/kdd5rMS/IMG-1713.jpg" 
                        alt="Paul Roofs Work" 
                        className="w-full h-[500px] object-cover"
                    />
                </div>
                <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border-4 border-gold-500 rounded-[2rem] -z-0"></div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
                <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-black text-forest-900 mb-6">
                    Serving Southern NB <br/> Since 1989
                </h2>
                <div className="space-y-6 text-lg text-forest-800/80 leading-relaxed">
                    <p>
                        It started with a single truck and a commitment to doing things the right way. Thirty-five years later, Paul Roofs has grown into Damascus's most trusted roofing team, but our core values haven't changed.
                    </p>
                    <p>
                        We believe in honest estimates, showing up on time, and leaving your property cleaner than we found it. Whether it's a heritage home in Hampton or a new build in Sussex, we treat every roof as if it were covering our own family.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "Family Owned & Operated",
                        "35 Years Experience",
                        "Certified Master Shingle Applicators",
                        "Seniors Discount Available"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="text-gold-500 flex-shrink-0" size={20} />
                            <span className="font-bold text-forest-900">{item}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 pt-10 border-t border-forest-900/10">
                     <p className="font-serif italic text-2xl text-forest-900 mb-4">"We don't just build roofs, we build relationships."</p>
                     <p className="font-bold text-gold-600 uppercase tracking-widest text-sm">- Paul, Owner</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};