
import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-mb-terracotta transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="animate-pulse">
        <Logo variant="hero" className="scale-75 md:scale-100 !text-mb-off-white" />
      </div>
      <div className="mt-12 w-32 h-[1px] bg-mb-off-white/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mb-off-white animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
