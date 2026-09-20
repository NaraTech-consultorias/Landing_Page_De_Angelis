import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/contactData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Essência', href: '#essencia' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Missão & Valores', href: '#valores' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      data-testid="navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-sand/30 py-3'
          : 'bg-brand-offwhite/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          data-testid="navbar-brand-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/assets/butterfly.png"
            alt="Símbolo Borboleta De Angelis"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-semibold tracking-wider text-brand-navy uppercase leading-tight">
              De Angelis
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-super-wide text-brand-slate uppercase font-medium">
              Fisioterapia
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`navbar-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-brand-navy/80 hover:text-brand-royal transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-whatsapp-cta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-royal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all duration-300 shadow-sm hover:shadow-brand-royal hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            <span>Agendar Atendimento</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          data-testid="navbar-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-navy hover:text-brand-royal focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" strokeWidth={1.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          data-testid="navbar-mobile-menu"
          className="lg:hidden bg-brand-offwhite border-b border-brand-sand/40 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`navbar-mobile-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-brand-navy py-1.5 border-b border-brand-sand/10 hover:text-brand-royal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-mobile-whatsapp-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-royal text-white text-sm font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              <span>Agendar Atendimento</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
