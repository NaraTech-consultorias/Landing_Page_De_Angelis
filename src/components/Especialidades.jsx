import React from 'react';
import { 
  Sparkles, 
  Ear, 
  Flower2, 
  HeartHandshake, 
  Baby, 
  Activity, 
  HandMetal, 
  ShieldCheck, 
  Flame, 
  Check, 
  MessageCircle 
} from 'lucide-react';
import { SPECIALTIES } from '../data/specialtiesData';
import { getWhatsAppLink } from '../data/contactData';

// Map icon string names to Lucide icon components
const iconMap = {
  Sparkles,
  Ear,
  Flower2,
  HeartHandshake,
  Baby,
  Activity,
  HandMetal,
  ShieldCheck,
  Flame,
};

export const Especialidades = () => {
  return (
    <section
      id="especialidades"
      data-testid="especialidades-section"
      className="py-20 lg:py-28 bg-brand-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Nossas Especialidades</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Um olhar integrado <br />
            <span className="text-brand-royal">para diferentes necessidades</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            A De Angelis Fisioterapia reúne diferentes abordagens para oferecer um cuidado personalizado, integral e completo para sua saúde e bem-estar.
          </p>
        </div>

        {/* 9 Specialties Grid */}
        <div
          data-testid="especialidades-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SPECIALTIES.map((spec) => {
            const IconComponent = iconMap[spec.iconName] || Sparkles;
            
            return (
              <div
                key={spec.id}
                data-testid={spec.testId}
                className="group relative rounded-2xl sm:rounded-3xl bg-white p-7 sm:p-8 border border-brand-sand/30 shadow-sm hover:shadow-brand-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-offwhite text-brand-royal group-hover:bg-brand-royal group-hover:text-white transition-colors duration-300 flex items-center justify-center border border-brand-sand/30">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate/80 px-3 py-1 rounded-full bg-brand-offwhite">
                      {spec.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold uppercase tracking-wider text-brand-navy mb-3">
                    {spec.title}
                  </h3>

                  <p className="text-sm text-brand-slate leading-relaxed mb-6 font-normal">
                    {spec.shortDescription}
                  </p>

                  {/* Bullet points of benefits */}
                  <div className="space-y-2.5 pt-4 border-t border-brand-sand/20 mb-6">
                    {spec.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-brand-sky/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-royal">
                          <Check className="w-3 h-3" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs text-brand-navy/85 leading-tight font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de mais informações e agendamento para a especialidade: ${spec.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`cta-spec-${spec.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-offwhite hover:bg-brand-royal text-brand-navy hover:text-white border border-brand-sand/30 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span>Agendar {spec.title.split('—')[0].trim()}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner within Specialties */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-brand-sand/40 shadow-sm text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-heading text-xl sm:text-2xl uppercase tracking-wider text-brand-navy font-semibold">
              Dúvidas sobre qual especialidade é a mais indicada?
            </h4>
            <p className="text-sm text-brand-slate mt-1">
              Nossa equipe realiza uma avaliação inicial individualizada para compreender o seu caso.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Tenho dúvidas sobre qual abordagem terapêutica é a mais indicada para o meu caso e gostaria de orientação.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="specialties-consult-whatsapp-cta"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-royal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            <span>Falar com a Equipe</span>
          </a>
        </div>

      </div>
    </section>
  );
};
