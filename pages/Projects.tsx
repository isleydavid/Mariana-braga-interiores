
import React from 'react';
import { Reveal } from '../components/Reveal';
import { Logo } from '../components/Logo';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <main className="pt-40 pb-32 bg-mb-off-white">
      {/* Top Banner (Bloco Areia) */}
      <section className="bg-mb-sand mt-[-10rem] pt-[15rem] pb-32 px-6 sm:px-12 mb-32 border-b border-mb-graphite/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.6em] text-mb-terracotta mb-6 block font-bold">Portfólio Selecionado</span>
            <h1 className="font-display text-5xl sm:text-[7rem] text-mb-graphite mb-12 lowercase logo-kerning leading-none">projetos</h1>
            <p className="text-2xl text-mb-graphite/60 font-light leading-relaxed max-w-3xl">
              Cada projeto reflete uma história, uma rotina e uma necessidade específica. Focamos em funcionalidade, conforto e estética atemporal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-32">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 150}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] bg-mb-sand rounded-xl shadow-2xl shadow-mb-graphite/10 border border-mb-sand">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" 
                  />
                </div>
                <div className="mt-10 flex justify-between items-end">
                  <div>
                    <h2 className="font-display text-4xl text-mb-graphite lowercase mb-3">{project.title}</h2>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-mb-terracotta font-bold">
                      {project.category} / {project.year}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-mb-terracotta flex items-center justify-center group-hover:bg-mb-terracotta group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-64 text-center border-t border-mb-terracotta/20 pt-32">
          <p className="font-display text-4xl italic text-mb-brown/30 mb-16 lowercase">historias sendo escritas em cada metro quadrado.</p>
          <Logo variant="full" className="opacity-30 inline-block scale-150" />
        </Reveal>
      </section>
    </main>
  );
};

export default Projects;
