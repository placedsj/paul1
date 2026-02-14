import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Impact } from './components/Impact';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-fdfbf7 text-forest-900 selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;