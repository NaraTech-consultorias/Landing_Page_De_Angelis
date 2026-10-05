import React from 'react';
import { Clock, Shield, UserCheck, Layers, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const PorQueEscolher = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Hora Marcada & Sem Atrasos",
      description: "Atendimento 100% exclusivo com horário reservado integralmente para você.",
    },
    {
      icon: Shield,
      title: "Espaço Acessível & Privativo",
      description: "Consultório moderno, silencioso e projetado para seu total conforto e privacidade.",
    },
    {
      icon: UserCheck,
      title: "Tratamento 100% Personalizado",
      description: "Planos terapêuticos adaptados às necessidades específicas do seu organismo.",
    },
    {
      icon: Layers,
      title: "Abordagem Integrada",
      description: "Fisioterapia clínica, terapias manuais e movimento em uma visão completa de saúde.",
    },
  ];

  return (
    <section
      id="diferenciais"
      data-testid="diferenciais-section"
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Diferenciais Exclusivos</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-3">
            A Experiência De Angelis
          </h2>

          <p className="text-base text-brand-slate leading-relaxed">
            Excelência técnica, pontualidade e o respeito que você merece.
          </p>
        </div>

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-offwhite/80 border border-brand-sand/40 shadow-sm hover:shadow-brand-card hover:border-brand-royal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-royal flex items-center justify-center shadow-sm mb-4 border border-brand-sand/30">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Lead Action Box */}
        <div className="rounded-3xl bg-brand-offwhite p-8 sm:p-10 border border-brand-sand/40 text-center max-w-3xl mx-auto">
          <h3 className="font-accent italic text-xl sm:text-2xl text-brand-navy mb-2">
            "O cuidado deve se adaptar a você, nunca o contrário."
          </h3>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto mb-6">
            Agende sua avaliação e descubra como uma abordagem integrada pode transformar a sua qualidade de vida.
          </p>
          <div>
            <a
              href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação na De Angelis Fisioterapia.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="differentials-whatsapp-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-royal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all shadow-brand-royal hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              <span>Agendar Minha Avaliação</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
