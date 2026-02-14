import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 border border-forest-100 rounded-full bg-white shadow-sm">
                <span className="text-gold-600 font-bold uppercase text-xs tracking-widest">#BetterCallPaul</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-black text-forest-900 mb-6 leading-[1.1]">
              Meet Paul, Southern NB's <br/>
              <span className="text-forest-800/80">Roofing Expert</span>
            </h1>
            <p className="text-lg text-forest-800/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Serving Damascus and Southern New Brunswick for 35 years. Dedicated to quality craftsmanship and community service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                  href="#contact"
                  className="bg-gold-500 text-forest-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-600 hover:text-white transition-all duration-300 shadow-xl shadow-gold-500/20"
              >
                  Get a Free Estimate
              </a>
              <a
                  href="#services"
                  className="bg-white text-forest-900 border border-forest-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-50 transition-all duration-300"
              >
                  View Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Trust Badges placeholder */}
                <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                            User
                         </div>
                     ))}
                </div>
                <span className="text-sm font-bold text-forest-900">Trusted by Neighbors since 1989</span>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-forest-900/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1627909968252-875883713f0c?q=80&w=2940&auto=format&fit=crop"
                    alt="Paul in front of home"
                    className="w-full h-[600px] object-cover object-top"
                />
                {/* Overlay Text simulated from image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-forest-900/80 to-transparent">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl w-fit border border-white/20">
                         <div className="bg-gold-500 p-2 rounded-lg">
                            <span className="font-serif font-bold text-white">35</span>
                         </div>
                         <div className="text-white">
                            <p className="text-xs uppercase tracking-wider font-bold opacity-80">Years of</p>
                            <p className="font-bold">Experience</p>
                         </div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-100 rounded-full -z-10 blur-3xl opacity-50"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-forest-100 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};