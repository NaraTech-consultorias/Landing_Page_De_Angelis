import React from 'react';
import { Clock, Shield, UserCheck, Layers, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const PorQueEscolher = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Atendimento Exclusivo com Hora Marcada",
      description: "Sem salas de espera cheias ou atrasos. Cada horário é reservado integralmente para você, garantindo a atenção e o tempo necessários para o seu cuidado.",
    },
    {
      icon: Shield,
      title: "Ambiente Acessível e Reservado",
      description: "Uma estrutura planejada para oferecer acessibilidade, privacidade, silêncio e acolhimento em cada momento da sua sessão.",
    },
    {
      icon: UserCheck,
      title: "Cuidado 100% Individualizado",
      description: "Você não precisa se adaptar a um protocolo genérico. Nossos tratamentos são personalizados após escuta atenta da sua história e avaliação detalhada.",
    },
    {
      icon: Layers,
      title: "Abordagem Integrada e Multidisciplinar",
      description: "Unimos técnicas da fisioterapia convencional, terapias manuais, reeducação postural e práticas integrativas para um olhar verdadeiramente amplo.",
    },
  ];

  return (
    <section
      id="diferenciais"
      data-testid="diferenciais-section"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Por Que Escolher a De Angelis</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            A Experiência De Angelis
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            Acreditamos que a qualidade de um tratamento também está na forma como você é recebido e respeitado em sua singularidade.
          </p>
        </div>

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-brand-offwhite border border-brand-sand/40 shadow-sm hover:shadow-brand-card hover:border-brand-royal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white text-brand-royal flex items-center justify-center shadow-sm mb-6 border border-brand-sand/30">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-semibold uppercase tracking-wider text-brand-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Highlight Box */}
        <div className="rounded-3xl bg-brand-offwhite p-8 sm:p-12 border border-brand-sand/40 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="font-accent italic text-2xl sm:text-3xl text-brand-navy">
              "Você não precisa se adaptar a um tratamento genérico. <br className="hidden sm:inline" />
              O cuidado deve se adaptar a você."
            </h3>
            <p className="text-sm text-brand-slate max-w-2xl mx-auto">
              Permita-se viver uma experiência terapêutica em um espaço onde você é o centro de todo o processo.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="differentials-whatsapp-cta"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-royal text-white text-sm sm:text-base font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all duration-300 shadow-brand-royal hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Agendar Minha Avaliação</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
