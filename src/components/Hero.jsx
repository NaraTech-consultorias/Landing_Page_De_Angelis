import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, Clock, Shield } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-brand-offwhite overflow-hidden"
    >
      {/* Decorative ambient background elements in brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-sky/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-2/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-brand-sand/20 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Official Brand Logo */}
        <div className="mb-4 sm:mb-6 flex flex-col items-center">
          <div className="relative mb-3 sm:mb-4">
            <img
              src="/assets/logo.png"
              alt="Logo Oficial De Angelis Fisioterapia"
              className="h-24 sm:h-36 md:h-44 w-auto object-contain animate-float-slow drop-shadow-md"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 border border-brand-sand/40 text-brand-royal text-[11px] sm:text-xs md:text-sm font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-royal" strokeWidth={1.5} />
            <span>Clínica de Fisioterapia & Terapias Integrativas</span>
          </div>
        </div>

        {/* Main Official Slogan Headline */}
        <h1
          data-testid="hero-headline"
          className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4 sm:mb-6 max-w-3xl"
        >
          Clínica de Fisioterapia <br />
          <span className="text-brand-royal text-xl sm:text-3xl md:text-4xl lg:text-5xl block mt-1">Cuidado Individualizado & Exclusivo</span>
        </h1>

        {/* Institutional Subtitle */}
        <p
          data-testid="hero-subtitle"
          className="text-sm sm:text-base md:text-lg text-brand-slate max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10 px-2"
        >
          Tratamentos especializados em fisioterapia clínica, reabilitação postural, saúde pélvica e terapias integrativas com atendimento exclusivo com hora marcada.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-brand-royal text-white text-sm sm:text-base font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all duration-300 shadow-brand-royal hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
            <span>Agendar Atendimento</span>
          </a>

          <a
            href="#especialidades"
            data-testid="hero-specialties-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/90 text-brand-navy border border-brand-sand/50 hover:border-brand-royal hover:text-brand-royal transition-all duration-300 text-sm sm:text-base font-medium shadow-sm hover:-translate-y-0.5"
          >
            <span>Conhecer Especialidades</span>
            <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        {/* Quick Highlights / Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 w-full pt-6 sm:pt-8 border-t border-brand-sand/30">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-left bg-white/60 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-brand-sand/20 sm:border-0 shadow-xs sm:shadow-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Hora Marcada</p>
              <p className="text-[11px] sm:text-xs text-brand-slate">Atendimento 100% exclusivo</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left bg-white/60 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-brand-sand/20 sm:border-0 shadow-xs sm:shadow-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Ambiente Reservado</p>
              <p className="text-[11px] sm:text-xs text-brand-slate">Conforto, sigilo e segurança</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left bg-white/60 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-brand-sand/20 sm:border-0 shadow-xs sm:shadow-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Cuidado Integrado</p>
              <p className="text-[11px] sm:text-xs text-brand-slate">Corpo, mente e movimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
