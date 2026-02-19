
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Etapas', path: '/etapas' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 sm:px-12 py-6 ${
        isScrolled ? 'bg-mb-off-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo variant="editorial" className={isScrolled ? 'text-mb-graphite' : 'text-mb-graphite'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                location.pathname === link.path ? 'text-mb-terracotta' : 'text-mb-graphite/60 hover:text-mb-graphite'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-mb-graphite focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-mb-off-white transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0 h-screen' : 'opacity-0 -translate-y-4 pointer-events-none h-0'
      }`}>
        <nav className="flex flex-col items-center pt-20 space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-lg font-serif tracking-widest text-mb-graphite"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
