
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'editorial' | 'short' | 'hero';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center leading-none ${className}`}>
        <span className="font-display text-7xl md:text-[9rem] text-mb-graphite logo-kerning font-medium lowercase tracking-tighter">
          Mariana Braga
        </span>
        <span className="font-sans text-sm md:text-base font-black text-mb-terracotta mt-8 uppercase tracking-[1.2em] ml-[1.2em]">
          Interiores
        </span>
      </div>
    );
  }

  if (variant === 'editorial') {
    return (
      <div className={`font-display text-2xl logo-kerning font-medium text-mb-graphite hover:text-mb-terracotta transition-colors duration-500 cursor-default ${className}`}>
        mariana braga
      </div>
    );
  }

  if (variant === 'short') {
    return (
      <div className={`font-display text-4xl font-light text-mb-graphite hover:text-mb-terracotta transition-colors cursor-default ${className}`}>
        mb
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center md:items-start leading-none cursor-default ${className}`}>
      <span className="font-display text-4xl md:text-5xl font-medium text-mb-graphite logo-kerning lowercase">
        mariana braga
      </span>
      <span className="font-sans text-[10px] md:text-xs font-black tracking-[1em] uppercase text-mb-terracotta mt-4 ml-[1em]">
        interiores
      </span>
    </div>
  );
};
