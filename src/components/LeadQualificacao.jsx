import React from 'react';
import { Activity, Heart, Shield, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const LeadQualificacao = () => {
  const conditions = [
    {
      icon: Activity,
      title: "Dores na Coluna & Postura",
      badge: "Alívio & Reeducação",
      description: "Lombalgia, dor cervical, hérnia de disco e desvios posturais tratados com RPG e Osteopatia.",
      whatsappMsg: "Olá! Gostaria de agendar uma avaliação para dor na coluna/postura."
    },
    {
      icon: Heart,
      title: "Saúde Pélvica & Gestação",
      badge: "Cuidado Específico",
      description: "Fortalecimento do assoalho pélvico, incontinência, suporte à fertilidade e reabilitação pós-parto.",
      whatsappMsg: "Olá! Gostaria de agendar uma avaliação de Fisioterapia Pélvica/Fertilidade."
    },
    {
      icon: Shield,
      title: "Tensões & Dores Musculares",
      badge: "Terapia Manual",
      description: "Liberação miofascial, alívio de pontos-gatilho e acupuntura para recuperar a mobilidade sem dor.",
      whatsappMsg: "Olá! Gostaria de agendar uma sessão de Liberação Miofascial/Acupuntura."
    },
    {
      icon: Sparkles,
      title: "Pilates Clínico Individual",
      badge: "Movimento Consciente",
      description: "Exercícios terapêuticos individuais para ganho de força, flexibilidade e proteção articular.",
      whatsappMsg: "Olá! Gostaria de informações sobre o Pilates Clínico Individual."
    }
  ];

  return (
    <section
      id="para-quem"
      data-testid="lead-qualificacao-section"
      className="py-20 bg-brand-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Como Podemos Ajudar Você?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Qual é a Sua Necessidade Hoje?
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            Conte para nós o que você está sentindo. Cuidamos de você com uma abordagem acolhedora, personalizada e sem pressa.
          </p>
        </div>

        {/* 4 Cards Grid with Direct WhatsApp Lead Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-brand-sand/40 shadow-sm hover:shadow-brand-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-offwhite text-brand-royal flex items-center justify-center border border-brand-sand/30">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-royal px-2.5 py-1 rounded-full bg-brand-sky/15">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(item.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-offwhite hover:bg-brand-royal text-brand-navy hover:text-white border border-brand-sand/30 text-xs font-semibold tracking-wider uppercase transition-all duration-200 group"
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Agendar Avaliação</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
