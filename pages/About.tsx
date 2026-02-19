
import React from 'react';
import { Logo } from '../components/Logo';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <main className="pt-40 bg-mb-off-white">
      {/* Section 1 — Título */}
      <section className="px-6 sm:px-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.6em] text-mb-terracotta mb-8 block font-bold">Quem Somos</span>
            <h1 className="font-display text-5xl sm:text-[6rem] text-mb-graphite mb-8 lowercase logo-kerning">sobre a mariana</h1>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Manifesto (Bloco de Cor Areia) */}
      <section className="bg-mb-sand py-32 px-6 sm:px-12 border-y border-mb-graphite/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-mb-terracotta mb-12 block font-bold">Manifesto</h2>
            <p className="text-2xl sm:text-3xl text-mb-graphite leading-relaxed font-light mb-16 italic font-display">
              "Acreditamos que o design de interiores deve facilitar a vida, não complicá-la."
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-8 text-lg text-mb-graphite font-light leading-relaxed max-w-2xl mx-auto">
              <p>Cada ambiente precisa refletir quem o habita, respeitar suas necessidades e proporcionar conforto, funcionalidade e bem-estar. O projeto não nasce pronto — ele é construído a partir do diálogo, da escuta e da compreensão.</p>
              <p>Criamos espaços que acolhem, organizam e permanecem relevantes ao longo do tempo.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — Posicionamento (Bloco de Cor Terracota) */}
      <section className="bg-mb-terracotta py-32 px-6 sm:px-12 text-mb-off-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20 text-center">
             <h2 className="font-display text-4xl md:text-6xl lowercase text-white">posicionamento</h2>
             <p className="mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/90">clientes que valorizam processo, clareza e qualidade</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100} className="bg-white/10 p-12 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="font-display text-2xl mb-6 lowercase font-medium text-white">residenciais e comerciais</h3>
              <p className="text-sm font-light leading-relaxed uppercase tracking-widest text-white/90">Foco total em soluções personalizadas de alto padrão.</p>
            </Reveal>
            <Reveal delay={200} className="bg-white/10 p-12 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="font-display text-2xl mb-6 lowercase font-medium text-white">ticket médio a alto</h3>
              <p className="text-sm font-light leading-relaxed uppercase tracking-widest text-white/90">Para quem busca segurança nas decisões e excelência no resultado.</p>
            </Reveal>
            <Reveal delay={300} className="bg-white/10 p-12 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="font-display text-2xl mb-6 lowercase font-medium text-white">solidez técnica</h3>
              <p className="text-sm font-light leading-relaxed uppercase tracking-widest text-white/90">Entregas esteticamente equilibradas e tecnicamente impecáveis.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4 — Assinatura Final */}
      <section className="py-40 text-center px-6">
        <Reveal>
          <Logo variant="hero" className="scale-75 mb-10" />
        </Reveal>
        <Reveal delay={300}>
          <div className="w-px h-16 bg-mb-terracotta mx-auto mb-8"></div>
          <p className="font-display italic text-2xl text-mb-brown lowercase font-medium">Mariana Braga: design de interiores com propósito.</p>
        </Reveal>
      </section>
    </main>
  );
};

export default About;