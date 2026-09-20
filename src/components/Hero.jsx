import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, Clock, Shield } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-offwhite overflow-hidden"
    >
      {/* Decorative ambient background elements in brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-sky/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-brand-sand/20 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Butterfly Symbol and Brand Header */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative mb-3">
            <img
              src="/assets/butterfly.png"
              alt="Símbolo Oficial da Borboleta — De Angelis Fisioterapia"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain animate-float-slow drop-shadow-md"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-sand/40 text-brand-royal text-xs sm:text-sm font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-royal" strokeWidth={1.5} />
            <span>Fisioterapia Integrada & Cuidado Individualizado</span>
          </div>
        </div>

        {/* Main Official Slogan Headline */}
        <h1
          data-testid="hero-headline"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide uppercase text-brand-navy leading-[1.1] mb-6"
        >
          Cuidar do corpo. <br className="hidden sm:inline" />
          <span className="text-brand-royal">Equilibrar a vida.</span> <br />
          Transformar caminhos.
        </h1>

        {/* Institutional Subtitle */}
        <p
          data-testid="hero-subtitle"
          className="text-base sm:text-lg md:text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed font-normal mb-10"
        >
          Na <strong className="font-semibold text-brand-navy">De Angelis Fisioterapia</strong>, acreditamos que cada pessoa possui uma história, um corpo único e um tempo próprio de transformação. Unimos fisioterapia, terapias complementares e movimento em um ambiente acolhedor, reservado e com hora marcada.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-royal text-white text-base font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all duration-300 shadow-brand-royal hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
            <span>Agendar Atendimento</span>
          </a>

          <a
            href="#especialidades"
            data-testid="hero-specialties-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 text-brand-navy border border-brand-sand/50 hover:border-brand-royal hover:text-brand-royal transition-all duration-300 text-base font-medium shadow-sm hover:-translate-y-0.5"
          >
            <span>Conhecer Especialidades</span>
            <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        {/* Quick Highlights / Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full pt-8 border-t border-brand-sand/30">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Clock className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Hora Marcada</p>
              <p className="text-xs text-brand-slate">Atendimento 100% exclusivo</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Shield className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Ambiente Reservado</p>
              <p className="text-xs text-brand-slate">Conforto, sigilo e segurança</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-royal shadow-sm flex-shrink-0 border border-brand-sand/30">
              <Sparkles className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">Cuidado Integrado</p>
              <p className="text-xs text-brand-slate">Corpo, mente e movimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
