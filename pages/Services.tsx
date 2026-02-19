
import React from 'react';
import { Reveal } from '../components/Reveal';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <main className="pt-40 bg-mb-off-white">
      {/* Section 1 — Proposta */}
      <section className="px-6 sm:px-12 mb-32">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.5em] text-mb-terracotta font-bold mb-6 block">Nossa Proposta</span>
            <h1 className="font-display text-5xl sm:text-8xl text-mb-graphite mb-12 lowercase logo-kerning">projetos estratégicos</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-2xl text-mb-graphite/70 font-light leading-relaxed max-w-3xl">
              Oferecemos projetos de interiores completos, desenvolvidos com cuidado, estratégia e atenção aos detalhes. Ideal para quem busca organização, clareza e acompanhamento.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — O Que Está Incluído (Bloco de Cor Areia) */}
      <section className="bg-mb-sand py-32 px-6 sm:px-12 border-y border-mb-graphite/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20 text-center">
             <h2 className="font-display text-4xl md:text-6xl lowercase">o que está incluído</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <Reveal key={idx} delay={idx * 100} className="bg-mb-off-white p-12 rounded-xl shadow-xl shadow-mb-graphite/5 border border-mb-sand">
                <div className="h-px w-12 bg-mb-terracotta mb-8"></div>
                <h3 className="font-display text-3xl text-mb-graphite lowercase mb-4">{service.title}</h3>
                <p className="text-mb-graphite/60 font-light leading-relaxed text-sm uppercase tracking-widest font-medium">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Filtro de Cliente (Bloco Terracota) */}
      <section className="bg-mb-terracotta py-32 px-6 sm:px-12 text-mb-off-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <Reveal>
            <div className="space-y-10">
              <h4 className="font-display text-4xl lowercase border-b border-mb-off-white/20 pb-6">Este serviço é para você se:</h4>
              <ul className="space-y-6">
                {[
                  'Valoriza planejamento e organização', 
                  'Busca um projeto funcional e bem pensado', 
                  'Quer segurança antes de iniciar a obra', 
                  'Prefere decisões orientadas por profissionais'
                ].map((item, i) => (
                  <li key={i} className="flex items-center font-light text-lg">
                    <span className="w-2 h-2 bg-mb-off-white rounded-full mr-6"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-10">
              <h4 className="font-display text-4xl lowercase border-b border-mb-off-white/20 pb-6 opacity-60">Talvez não seja ideal se:</h4>
              <ul className="space-y-6">
                {[
                  'Busca soluções imediatas sem processo', 
                  'Não pretende seguir um projeto técnico', 
                  'Não valoriza acompanhamento profissional'
                ].map((item, i) => (
                  <li key={i} className="flex items-center font-light text-lg opacity-60">
                    <span className="w-2 h-2 bg-mb-off-white/40 rounded-full mr-6"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
