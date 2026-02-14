import React from 'react';
import { MapPin, Trophy, Info } from 'lucide-react';

const communities = [
    { name: 'Damascus', role: 'Headquarters', detail: 'Home of Paul Roofs. Same-day emergency response available.' },
    { name: 'Sussex', role: 'Core Service Area', detail: 'Specializing in heritage home roof restorations and repairs.' },
    { name: 'Hampton', role: 'Core Service Area', detail: 'Complete roofing systems for new constructions and renovations.' },
    { name: 'Saint John', role: 'Metro Service', detail: 'Commercial and residential flat roofing solutions.' },
    { name: 'Quispamsis', role: 'Valley Service', detail: 'Expert asphalt shingle replacement and upgrades.' },
    { name: 'Rothesay', role: 'Valley Service', detail: 'Premium metal roofing installations and aesthetic upgrades.' },
    { name: 'Norton', role: 'Rural Service', detail: 'Barn, agricultural, and residential roofing services.' },
    { name: 'Apohaqui', role: 'Rural Service', detail: 'Leak detection, storm damage repair, and maintenance.' },
];

export const Impact: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-serif font-black text-forest-900 mb-16 text-center lg:text-left">
            Serving Southern NB
        </h2>

        {/* Top Section: Map & Badge */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            
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

        {/* Bottom Section: Service Area Grid */}
        <div className="border-t border-forest-100 pt-16">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">Our Local Service Areas</h3>
                <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
                <p className="mt-4 text-forest-500 text-sm">Hover over a location to see service details</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {communities.map((town) => (
                    <div key={town.name} className="group relative">
                        <div className="bg-cream-50 border border-cream-200 rounded-xl p-4 text-center cursor-help transition-all duration-300 hover:border-gold-500 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col justify-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <MapPin size={16} className="text-gold-500" />
                                <span className="font-bold text-forest-900">{town.name}</span>
                            </div>
                            <span className="text-xs text-forest-500 font-medium uppercase tracking-wider">{town.role}</span>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pointer-events-none transform group-hover:-translate-y-1 translate-y-2">
                            <div className="bg-forest-900 text-white text-sm p-5 rounded-xl shadow-xl relative text-center leading-relaxed border border-gold-500/20">
                                <p>{town.detail}</p>
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-forest-900"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="text-center text-forest-500 mt-12 text-sm">
                Don't see your town? <a href="#contact" className="text-gold-600 font-bold hover:underline">Contact us</a> to check if we service your area.
            </p>
        </div>

      </div>
    </section>
  );
};