import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

  return (
    <section id="contact" className="py-24 bg-forest-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-800 rounded-l-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-forest-950 rounded-r-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 overflow-hidden">
            
            <div className="lg:w-5/12">
                <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Will yours be next?</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-black text-forest-900 mb-6">Get a Free Estimate</h2>
                <p className="text-forest-600 mb-10 text-lg">
                    Proudly based in Damascus, NB. Call Paul today to get started on your project!
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-2xl">
                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-forest-400">Call Us</p>
                            <p className="text-forest-900 font-bold text-lg hover:text-gold-600 transition-colors">
                                <a href="tel:5062714162">(506) 271-4162</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-2xl">
                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-forest-400">Email Us</p>
                            <p className="text-forest-900 font-bold text-lg">info@paulroofs.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-2xl">
                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-forest-400">Location</p>
                            <p className="text-forest-900 font-bold text-lg">Damascus, NB</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-7/12">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            required 
                            type="text" 
                            className="w-full bg-cream-50 border border-cream-200 rounded-xl p-4 text-forest-900 placeholder:text-forest-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                            placeholder="Your Name"
                        />
                        <input 
                            required 
                            type="tel" 
                            className="w-full bg-cream-50 border border-cream-200 rounded-xl p-4 text-forest-900 placeholder:text-forest-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                            placeholder="Phone Number"
                        />
                    </div>

                    <input 
                        required 
                        type="email" 
                        className="w-full bg-cream-50 border border-cream-200 rounded-xl p-4 text-forest-900 placeholder:text-forest-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                        placeholder="Email Address"
                    />

                    <textarea 
                        rows={4}
                        className="w-full bg-cream-50 border border-cream-200 rounded-xl p-4 text-forest-900 placeholder:text-forest-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                        placeholder="How can we help?"
                    ></textarea>

                    <button 
                        type="submit"
                        className="w-full bg-gold-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-600 transition-all duration-300 shadow-lg shadow-gold-500/20 flex justify-center items-center gap-2"
                    >
                        {submitted ? (
                            <>
                                <CheckCircle size={24} /> Request Sent!
                            </>
                        ) : (
                            "Submit Request"
                        )}
                    </button>
                </form>
            </div>
            
        </div>
      </div>
    </section>
  );
};