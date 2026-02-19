
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mb-sand/30 pt-20 pb-10 px-6 sm:px-12 border-t border-mb-sand/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Logo variant="full" className="mb-8 opacity-90" />
        
        <div className="flex space-x-8 mb-12">
          <a href="https://www.instagram.com/marianabragainteriores/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-mb-graphite/60 hover:text-mb-terracotta transition-colors">Instagram</a>
          <a href="https://w.app/marianabragainteriores" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-mb-graphite/60 hover:text-mb-terracotta transition-colors">WhatsApp</a>
          <a href="#" className="text-sm uppercase tracking-widest text-mb-graphite/60 hover:text-mb-terracotta transition-colors">LinkedIn</a>
        </div>

        <p className="font-serif italic text-lg text-mb-graphite/40 max-w-md text-center mb-12">
          "Onde a funcionalidade encontra o bem-estar."
        </p>

        <div className="w-full h-px bg-mb-graphite/5 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center text-[10px] uppercase tracking-widest text-mb-graphite/40">
          <span>&copy; {new Date().getFullYear()} Mariana Braga Interiores</span>
          <span className="mt-4 md:mt-0">Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
};