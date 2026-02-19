
import React from 'react';
import { Reveal } from '../components/Reveal';
import { Logo } from '../components/Logo';
import { STAGES } from '../constants';

const Stages: React.FC = () => {
  const getBgColor = (idx: number) => {
    const colors = ['bg-mb-off-white', 'bg-mb-sand', 'bg-mb-terracotta'];
    return colors[idx % 3];
  };

  const getTextColor = (idx: number) => {
    return idx % 3 === 2 ? 'text-mb-off-white' : 'text-mb-graphite';
  };

  const getAccentColor = (idx: number) => {
    return idx % 3 === 2 ? 'bg-mb-off-white' : 'bg-mb-terracotta';
  };

  return (
    <main className="pt-40 bg-mb-off-white min-h-screen">
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-32">
        <Reveal className="text-center">
          <span className="text-[10px] uppercase tracking-[0.8em] text-mb-terracotta mb-6 block font-bold">Fluxo de Trabalho</span>
          <h1 className="font-display text-6xl md:text-8xl text-mb-graphite lowercase logo-kerning">etapas do projeto</h1>
          <p className="mt-8 text-mb-graphite/60 max-w-2xl mx-auto font-light text-lg">Trabalhamos com um processo claro e bem definido, garantindo organização e qualidade em todas as fases.</p>
        </Reveal>
      </section>

      <div className="flex flex-col">
        {STAGES.map((stage, idx) => (
          <section key={stage.number} className={`${getBgColor(idx)} py-32 px-6 sm:px-12 border-t border-mb-graphite/5`}>
            <div className="max-w-7xl mx-auto">
              <Reveal delay={100}>
                <div className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${idx % 2 !== 0 ? 'md:order-2' : ''} relative flex items-center justify-center`}>
                    <span className={`font-display text-[14rem] md:text-[22rem] leading-none opacity-20 select-none ${getTextColor(idx)}`}>
                      {stage.number}
                    </span>
                    <div className={`absolute bottom-0 w-32 h-1 ${getAccentColor(idx)} opacity-50`}></div>
                  </div>
                  <div className={`space-y-10 ${getTextColor(idx)}`}>
                    <h3 className="font-display text-5xl md:text-7xl lowercase leading-tight">{stage.title}</h3>
                    <div className={`w-20 h-px ${getAccentColor(idx)}`}></div>
                    <p className={`text-xl font-light leading-relaxed max-w-md ${idx % 3 === 2 ? 'opacity-80' : 'opacity-70'}`}>
                      {stage.description}
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Fase {idx + 1}</span>
                        <div className={`flex-grow h-px ${getAccentColor(idx)} opacity-20`}></div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <Reveal className="py-48 flex flex-col items-center bg-mb-off-white">
        <div className="w-px h-32 bg-mb-terracotta mb-12"></div>
        <Logo variant="editorial" className="opacity-60 mb-8" />
        <p className="font-display italic text-2xl text-mb-graphite/40 lowercase">design bem pensado transforma espaços.</p>
      </Reveal>
    </main>
  );
};

export default Stages;
