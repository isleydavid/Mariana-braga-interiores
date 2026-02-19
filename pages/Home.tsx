
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Reveal } from '../components/Reveal';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden bg-mb-off-white">
      {/* Hero Section — Cores Máximas */}
      <section className="relative h-screen flex flex-col items-center justify-center editorial-split overflow-hidden px-6">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 h-full w-full -z-10">
          <div className="hidden md:block col-span-5 bg-mb-sand transition-all duration-1000"></div>
          <div className="col-span-1 md:col-span-2 bg-mb-off-white"></div>
          <div className="hidden md:block col-span-5 bg-mb-terracotta transition-all duration-1000"></div>
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-mb-sand via-mb-off-white to-mb-terracotta"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <Reveal delay={200}>
            <div className="mb-12">
               <Logo variant="hero" className="drop-shadow-sm" />
            </div>
          </Reveal>
          <Reveal delay={800} className="mt-8">
            <h1 className="font-display italic text-3xl md:text-4xl text-mb-graphite mb-10 lowercase leading-tight">
              Design de interiores contemporâneo, <br className="hidden md:block" /> funcional e sofisticado.
            </h1>
            <div className="w-16 h-1 bg-mb-terracotta mx-auto mb-10"></div>
            <p className="font-sans text-xs md:text-sm text-mb-graphite/90 max-w-xl mx-auto leading-loose uppercase tracking-[0.4em] font-medium">
              Criamos espaços pensados para a rotina real, onde estética, funcionalidade e bem-estar caminham juntos.
            </p>
          </Reveal>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <div className="w-[1px] h-12 bg-mb-graphite/30"></div>
        </div>
      </section>

      {/* Quem Somos — Bloco Sand Vibrante com Imagem Autoral */}
      <section className="py-32 md:py-56 px-6 sm:px-12 bg-mb-sand border-y border-mb-graphite/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mb-terracotta/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div className="relative group">
              {/* Retângulo de destaque saturado */}
              <div className="bg-mb-terracotta absolute -inset-4 -z-10 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/mariana-braga.png" 
                alt="Mariana Braga" 
                className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="max-w-md">
              <span className="text-[10px] uppercase tracking-[0.6em] text-mb-terracotta mb-8 block font-black">Sobre a Mariana</span>
              <h2 className="font-display text-6xl md:text-8xl text-mb-graphite leading-[0.9] mb-12 lowercase logo-kerning">
                o design com <br /> <span className="italic font-light text-mb-brown">propósito.</span>
              </h2>
              <div className="space-y-6 text-xl text-mb-graphite font-light leading-relaxed mb-12">
                <p>Sou Mariana Braga, designer de interiores, e acredito que um bom projeto vai muito além da estética.</p>
                <p>Ele precisa fazer sentido no dia a dia, trazer conforto, fluidez e segurança para quem vive o espaço.</p>
              </div>
              <Link to="/sobre" className="group relative inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-mb-terracotta">
                <span>Conhecer Trajetória</span>
                <div className="w-12 h-px bg-mb-terracotta group-hover:w-20 transition-all"></div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O Que Fazemos — Grade Vibrante */}
      <section className="py-32 bg-mb-off-white px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-32 text-center">
            <h2 className="font-display text-5xl md:text-7xl text-mb-graphite lowercase mb-8">O que fazemos por você</h2>
            <div className="w-24 h-px bg-mb-sand mx-auto"></div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Projetos pensados para a sua rotina", color: "bg-mb-sand" },
              { text: "Clareza antes do início da obra", color: "bg-mb-terracotta" },
              { text: "Decisões mais seguras e conscientes", color: "bg-mb-off-white" },
              { text: "Integração entre estética e funcionalidade", color: "bg-mb-off-white" },
              { text: "Acompanhamento profissional", color: "bg-mb-sand" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150} className={`${item.color === 'bg-mb-terracotta' ? 'text-white' : 'text-mb-graphite'} ${item.color} p-12 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-mb-graphite/5`}>
                <span className="text-3xl mb-8 block font-bold">0{idx + 1}</span>
                <p className="font-sans text-sm uppercase tracking-[0.2em] font-black leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços & Etapas — Split Cores Fortes */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="bg-mb-terracotta p-12 md:p-32 flex flex-col justify-center items-start text-white group overflow-hidden relative">
          <div className="absolute inset-0 bg-mb-graphite opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-8 block font-bold">Serviços</span>
            <h3 className="font-display text-5xl md:text-7xl mb-12 lowercase leading-none">soluções <br /> únicas</h3>
            <p className="text-white/80 mb-12 font-light text-lg max-w-sm leading-relaxed">Projetos residenciais e comerciais personalizados para o seu estilo de vida.</p>
            <Link to="/servicos" className="px-12 py-5 border-2 border-white text-[10px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-mb-terracotta transition-all">Ver Serviços</Link>
          </Reveal>
        </div>
        <div className="bg-mb-sand p-12 md:p-32 flex flex-col justify-center items-start group overflow-hidden relative">
          <div className="absolute inset-0 bg-mb-terracotta opacity-0 group-hover:opacity-5 transition-opacity"></div>
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-mb-terracotta mb-8 block font-bold">Processo</span>
            <h3 className="font-display text-5xl md:text-7xl mb-12 lowercase text-mb-graphite leading-none">fluxo <br /> inteligente</h3>
            <p className="text-mb-graphite/80 mb-12 font-light text-lg max-w-sm leading-relaxed">Garantimos organization, previsibilidade e excelência técnica.</p>
            <Link to="/etapas" className="px-12 py-5 bg-mb-terracotta text-white text-[10px] uppercase tracking-[0.5em] font-black shadow-2xl hover:bg-mb-brown transition-colors">Ver Etapas</Link>
          </Reveal>
        </div>
      </section>

      {/* Encerramento — Logo com Impacto */}
      <section className="py-64 text-center px-6 bg-mb-off-white relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="font-display text-[30vw] select-none">MB</span>
        </div>
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-mb-graphite max-w-4xl italic mx-auto leading-tight mb-24 lowercase">
            "design bem pensado transforma espaços. <br /> projeto bem conduzido transforma experiências."
          </h2>
          <div className="scale-150 md:scale-[2]">
            <Logo variant="full" />
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
