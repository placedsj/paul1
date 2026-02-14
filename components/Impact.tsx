import React from 'react';
import { MapPin, Trophy } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-serif font-black text-forest-900 mb-16 text-center lg:text-left">
            Serving Southern NB
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Map Visualization */}
            <div className="w-full lg:w-7/12 relative group">
                <div className="bg-cream-100 rounded-[2.5rem] p-4 lg:p-8 relative overflow-hidden shadow-inner border border-forest-50 aspect-video">
                     {/* Abstract Map Lines */}
                     <div className="absolute inset-0 opacity-20" 
                          style={{
                              backgroundImage: 'repeating-linear-gradient(45deg, #2d5a3f 0, #2d5a3f 1px, transparent 0, transparent 50%)',
                              backgroundSize: '40px 40px'
                          }}>
                     </div>
                     
                     {/* Map Content */}
                     <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-soft">
                        <img 
                            src="https://i.ibb.co/nNNvG2s8/AEBDDDFF-AB86-46-A7-96-E4-C3-DCE7468884.jpg"
                            className="w-full h-full object-cover opacity-30 grayscale"
                            alt="Map Background"
                        />
                        
                        {/* Pins */}
                        <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-forest-900 mb-2 whitespace-nowrap">Damascus HQ</div>
                            <MapPin className="text-forest-600 w-8 h-8 fill-forest-600 mx-auto" />
                        </div>

                        <div className="absolute bottom-1/3 right-1/3 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-forest-900 mb-2 whitespace-nowrap">Sussex Job</div>
                            <MapPin className="text-forest-600 w-8 h-8 fill-forest-600 mx-auto" />
                        </div>
                        
                        <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDuration: '2.5s' }}>
                             <div className="bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-forest-900 mb-2 whitespace-nowrap">Hampton Project</div>
                            <MapPin className="text-gold-500 w-10 h-10 fill-gold-500 mx-auto" />
                        </div>
                     </div>
                </div>
            </div>

            {/* Award Badge & Text */}
            <div className="w-full lg:w-5/12 flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-8">
                    {/* Badge CSS Construction */}
                    <div className="absolute inset-0 bg-forest-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-gold-500 p-2">
                        <div className="w-full h-full rounded-full border border-gold-500/50 flex flex-col items-center justify-center p-4 bg-forest-900 relative overflow-hidden">
                             <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                             <div className="text-gold-500 font-serif font-bold text-xl uppercase tracking-widest mb-1">Paul Roofs</div>
                             <div className="text-white font-serif font-black text-6xl leading-none mb-1">35</div>
                             <div className="text-gold-500 font-bold text-2xl">YEARS</div>
                             
                             {/* Curved text simulation */}
                             <div className="absolute bottom-6 text-[10px] text-white/60 uppercase tracking-[0.2em] w-32 text-center">
                                Est. 1989
                             </div>
                        </div>
                    </div>
                    {/* Ribbon */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-12 bg-gold-600 flex items-center justify-center shadow-lg transform -skew-x-12 z-10">
                         <span className="text-white font-bold uppercase tracking-widest text-xs">Local Expert</span>
                    </div>
                </div>
                
                <p className="text-forest-800 text-lg font-medium leading-relaxed max-w-sm">
                    From Damascus to the coast, we're proud to be a part of this community, delivering reliable service and lasting value to our neighbors for 35 years.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};