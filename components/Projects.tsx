import React from 'react';
import { MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        location: 'Sussex, NB',
        title: 'Residential Roof Replacement',
        type: 'Asphalt Shingle',
        image: 'https://i.ibb.co/GQDXX7hp/IMG-2135.jpg'
    },
    {
        id: 2,
        location: 'Damascus, NB',
        title: 'Modern Exterior Upgrade',
        type: 'Siding & Roof',
        image: 'https://i.ibb.co/p6xKS32t/IMG-6855.jpg'
    },
    {
        id: 3,
        location: 'Hampton, NB',
        title: 'Complete Home Renovation',
        type: 'Full Service',
        image: 'https://i.ibb.co/chPYqL7B/IMG-3781.jpg'
    }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-forest-900">Recent Projects</h2>
            <p className="mt-4 text-forest-600 max-w-2xl mx-auto">
                From minor repairs to complete replacements, see the quality craftsmanship we bring to every job in Southern New Brunswick.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="group rounded-[2rem] overflow-hidden relative aspect-[4/5] cursor-pointer">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 text-gold-400 text-sm font-bold uppercase tracking-wider mb-2">
                            <MapPin size={14} />
                            {project.location}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">
                            {project.type}
                        </span>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-forest-200 rounded-full font-bold text-forest-900 hover:bg-forest-50 transition-colors">
                View More Projects
            </a>
        </div>
      </div>
    </section>
  );
};