import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/contactData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer-section"
      className="bg-brand-navy-dark text-brand-offwhite/70 py-12 border-t border-brand-slate/20 text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand and Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/butterfly.png"
                alt="Logo De Angelis Fisioterapia"
                className="w-8 h-8 object-contain brightness-110"
              />
              <div>
                <span className="font-heading text-lg sm:text-xl font-semibold tracking-wider text-white uppercase block leading-tight">
                  De Angelis
                </span>
                <span className="font-sans text-[9px] tracking-super-wide text-brand-sky uppercase font-medium">
                  Fisioterapia
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-offwhite/60 max-w-sm mt-1">
              {CONTACT_INFO.slogan}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-brand-offwhite/80">
            <a href="#sobre" className="hover:text-brand-sky transition-colors">Sobre Nós</a>
            <a href="#essencia" className="hover:text-brand-sky transition-colors">Nossa Essência</a>
            <a href="#especialidades" className="hover:text-brand-sky transition-colors">Especialidades</a>
            <a href="#valores" className="hover:text-brand-sky transition-colors">Missão & Valores</a>
            <a href="#equipe" className="hover:text-brand-sky transition-colors">Equipe</a>
            <a href="#diferenciais" className="hover:text-brand-sky transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-brand-sky transition-colors">Contato</a>
          </nav>

          {/* Social / Direct Contacts */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-royal text-white flex items-center justify-center transition-all duration-300"
              aria-label="Instagram da De Angelis Fisioterapia"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-royal text-white flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp da De Angelis Fisioterapia"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-brand-offwhite/50">
          <p>
            © {currentYear} {CONTACT_INFO.clinicName}. Todos os direitos reservados.
          </p>

          <p className="flex items-center justify-center gap-1">
            <span>Cuidado individualizado e humanizado</span>
            <Heart className="w-3.5 h-3.5 text-brand-sky inline" strokeWidth={1.5} />
          </p>
        </div>
      </div>
    </footer>
  );
};
