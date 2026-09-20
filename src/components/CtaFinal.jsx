import React from 'react';
import { MessageCircle, MapPin, Clock, Instagram, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/contactData';

export const CtaFinal = () => {
  return (
    <section
      id="contato"
      data-testid="cta-final-section"
      className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-royal/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-[400px] h-[400px] bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Butterfly Icon & Header Tag */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/assets/butterfly.png"
            alt="Símbolo Borboleta De Angelis"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain animate-float-slow mb-4 drop-shadow-lg brightness-110"
          />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-extra-wide">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Inicie Sua Jornada</span>
          </div>
        </div>

        {/* Closing Official Phrase Headline */}
        <h2
          data-testid="cta-final-headline"
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide uppercase text-white leading-tight mb-6"
        >
          {CONTACT_INFO.closingPhrase}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-brand-offwhite/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Dê o primeiro passo para o seu bem-estar, equilíbrio e recuperação. Estamos prontos para acolher você com exclusividade, respeito e hora marcada.
        </p>

        {/* Big Primary WhatsApp Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-whatsapp-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-brand-royal hover:bg-brand-sky text-white text-base sm:text-lg font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_10px_35px_rgba(21,61,148,0.5)] hover:shadow-brand-glow hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
            <span>Agendar Atendimento via WhatsApp</span>
          </a>
        </div>

        {/* Contact Info / Address Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-left">
          
          {/* Address Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 text-brand-sky">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
              <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">Localização</h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-offwhite/80 leading-relaxed">
              {CONTACT_INFO.address}
            </p>
            <p className="text-xs text-brand-sky mt-1 font-medium">
              {CONTACT_INFO.cityState}
            </p>
          </div>

          {/* Hours Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 text-brand-sky">
              <Clock className="w-5 h-5" strokeWidth={1.5} />
              <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">Horários</h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-offwhite/80 leading-relaxed">
              {CONTACT_INFO.businessHours}
            </p>
            <p className="text-xs text-brand-sky mt-1 font-medium">
              Atendimento exclusivo individual
            </p>
          </div>

          {/* Social / WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 text-brand-sky">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">Atendimento</h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-offwhite/80 leading-relaxed flex items-center gap-2">
              <span>WhatsApp:</span>
              <strong className="text-white font-medium">{CONTACT_INFO.whatsappDisplay}</strong>
            </p>
            <p className="text-xs text-brand-sky mt-1 font-medium flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>{CONTACT_INFO.instagram}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
