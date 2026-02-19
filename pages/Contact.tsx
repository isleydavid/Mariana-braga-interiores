
import React from 'react';
import { Reveal } from '../components/Reveal';
import { Logo } from '../components/Logo';

const Contact: React.FC = () => {
  return (
    <main className="pt-40 min-h-screen bg-mb-off-white">
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-32">
        <div className="grid lg:grid-cols-2 gap-px bg-mb-graphite/5 rounded-3xl overflow-hidden shadow-2xl">
          {/* Info Side (Bloco de Cor Areia) */}
          <div className="bg-mb-sand p-10 sm:p-20 space-y-16">
            <Reveal>
              <div className="space-y-12">
                <span className="text-[10px] uppercase tracking-[0.6em] text-mb-terracotta font-bold block">Contato</span>
                <h1 className="font-display text-6xl md:text-[6.5rem] text-mb-graphite leading-[0.85] lowercase logo-kerning">
                  vamos <br /> <span className="text-mb-terracotta italic font-light">conversar?</span>
                </h1>
                <p className="text-2xl text-mb-graphite/70 font-light leading-relaxed max-w-md">
                  Se você busca um projeto bem planejado e funcional, será um prazer conversar.
                </p>
                
                <div className="space-y-10 pt-10 border-t border-mb-graphite/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-mb-graphite/40 block mb-4 font-bold">Direto</span>
                    <a href="mailto:contato@marianabraga.com" className="font-display text-3xl text-mb-graphite hover:text-mb-terracotta transition-colors lowercase">contato@marianabraga.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-mb-graphite/40 block mb-4 font-bold">Mensagem</span>
                    <a href="https://w.app/marianabragainteriores" target="_blank" rel="noopener noreferrer" className="font-display text-3xl text-mb-graphite hover:text-mb-terracotta transition-colors lowercase italic underline underline-offset-8 decoration-mb-terracotta/30">Enviar WhatsApp</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Side (Off-white) */}
          <div className="bg-mb-off-white p-10 sm:p-20">
            <Reveal delay={300}>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-mb-graphite/40 block ml-1 font-bold">Nome completo</label>
                  <input type="text" className="w-full bg-mb-sand/10 border-b-2 border-mb-sand py-4 px-2 focus:outline-none focus:border-mb-terracotta transition-colors font-light text-lg" placeholder="Como podemos te chamar?" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-mb-graphite/40 block ml-1 font-bold">E-mail</label>
                  <input type="email" className="w-full bg-mb-sand/10 border-b-2 border-mb-sand py-4 px-2 focus:outline-none focus:border-mb-terracotta transition-colors font-light text-lg" placeholder="seuemail@exemplo.com" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-mb-graphite/40 block ml-1 font-bold">Seu sonho</label>
                  <textarea rows={4} className="w-full bg-mb-sand/10 border-b-2 border-mb-sand py-4 px-2 focus:outline-none focus:border-mb-terracotta transition-colors font-light text-lg resize-none" placeholder="Conte-nos um pouco sobre seu projeto..."></textarea>
                </div>
                <button type="submit" className="w-full bg-mb-terracotta text-white py-6 text-[10px] uppercase tracking-[0.5em] font-bold shadow-xl shadow-mb-terracotta/20 hover:bg-mb-brown transition-all mt-6">Iniciar Conversa</button>
              </form>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-48 text-center flex flex-col items-center">
          <Logo variant="full" className="mb-12 scale-125" />
          <p className="font-display text-2xl italic text-mb-brown/40 lowercase max-w-xl leading-relaxed">Design de interiores contemporâneo, funcional e sofisticado.</p>
        </Reveal>
      </section>
    </main>
  );
};

export default Contact;