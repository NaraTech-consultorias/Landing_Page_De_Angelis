import React from 'react';
import { Sparkles, UserCheck, CalendarCheck, ShieldCheck, Activity } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const Apresentacao = () => {
  return (
    <section
      id="sobre"
      data-testid="apresentacao-section"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
          <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Apresentação da Clínica</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-6">
          Um cuidado que olha <br />
          <span className="text-brand-royal">para você por inteiro</span>
        </h2>

        {/* Main Text Content */}
        <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-brand-slate leading-relaxed mb-12">
          <p>
            Na <strong className="font-semibold text-brand-navy">De Angelis Fisioterapia</strong>, cuidar não significa apenas tratar uma dor ou uma condição. Significa compreender a pessoa como um todo e construir, junto com ela, um caminho de reabilitação e saúde que respeite seu corpo, seus limites e seus objetivos.
          </p>
          <p className="text-sm sm:text-base text-brand-slate/90">
            Cada pessoa possui uma história e um tempo próprio. Por isso, nosso atendimento começa pela escuta atenta e avaliação minuciosa, integrando fisioterapia clínica e terapias complementares em um ambiente acessível, seguro e reservado.
          </p>
        </div>

        {/* 3 Pillars of Care */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          <div className="p-6 rounded-2xl bg-brand-offwhite/80 border border-brand-sand/40 shadow-sm hover:shadow-brand-subtle transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white text-brand-royal flex items-center justify-center shadow-sm mb-4 border border-brand-sand/30">
              <UserCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
              Avaliação Individual
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
              Plano de tratamento personalizado construído a partir das suas queixas, necessidades e histórico corporal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-offwhite/80 border border-brand-sand/40 shadow-sm hover:shadow-brand-subtle transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white text-brand-royal flex items-center justify-center shadow-sm mb-4 border border-brand-sand/30">
              <CalendarCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
              Hora Marcada
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
              Atendimentos exclusivos e pontuais, proporcionando o tempo integral necessário para o seu cuidado.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-offwhite/80 border border-brand-sand/40 shadow-sm hover:shadow-brand-subtle transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white text-brand-royal flex items-center justify-center shadow-sm mb-4 border border-brand-sand/30">
              <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
              Espaço Reservado
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
              Ambiente planejado com total acessibilidade, privacidade, silêncio e acolhimento para o seu bem-estar.
            </p>
          </div>
        </div>

        {/* WhatsApp Link CTA */}
        <div>
          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação na De Angelis Fisioterapia.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="apresentacao-whatsapp-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand-royal hover:text-brand-royal-dark transition-colors group"
          >
            <span>Agende sua avaliação fisioterapêutica</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
