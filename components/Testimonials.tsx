import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cream-50">
      <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <h2 className="text-4xl lg:text-5xl font-serif font-black text-forest-900">
                Neighbor Reviews
            </h2>
            <div className="flex gap-2">
                 <button className="w-10 h-10 rounded-full border border-forest-200 flex items-center justify-center hover:bg-forest-900 hover:text-white transition-colors">←</button>
                 <button className="w-10 h-10 rounded-full bg-forest-900 text-white flex items-center justify-center hover:bg-gold-500 transition-colors">→</button>
            </div>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200">
                <div className="flex gap-1 text-gold-500 mb-6">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                </div>
                <p className="text-forest-800 mb-8 leading-relaxed italic">
                    "Paul's team was professional and efficient. Our new roof looks amazing and the cleanup was spotless!"
                </p>
                <div className="flex items-center gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" 
                        alt="Sarah T."
                        className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                        <h4 className="font-bold text-forest-900">Sarah T.</h4>
                        <p className="text-sm text-forest-500">Hampton Resident</p>
                    </div>
                </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200 hidden md:block">
                <div className="flex gap-1 text-gold-500 mb-6">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                </div>
                <p className="text-forest-800 mb-8 leading-relaxed italic">
                    "We had a leak during the last storm. Paul came out personally to inspect it and fixed it the same day."
                </p>
                <div className="flex items-center gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                        alt="Mike R."
                        className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                        <h4 className="font-bold text-forest-900">Mike R.</h4>
                        <p className="text-sm text-forest-500">Saint John</p>
                    </div>
                </div>
            </div>
            
             {/* Review Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200 hidden lg:block">
                <div className="flex gap-1 text-gold-500 mb-6">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                </div>
                <p className="text-forest-800 mb-8 leading-relaxed italic">
                    "Fair pricing and honest communication. Hard to find these days. Highly recommend Paul Roofs. #BetterCallPaul"
                </p>
                <div className="flex items-center gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" 
                        alt="David L."
                        className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                        <h4 className="font-bold text-forest-900">David L.</h4>
                        <p className="text-sm text-forest-500">Sussex</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};