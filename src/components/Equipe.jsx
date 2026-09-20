import React from 'react';
import { Users, User, MessageCircle, Award } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';
import { getWhatsAppLink } from '../data/contactData';

export const Equipe = () => {
  return (
    <section
      id="equipe"
      data-testid="equipe-section"
      className="py-20 lg:py-28 bg-brand-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Corpo Clínico</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Profissionais Dedicados <br />
            <span className="text-brand-royal">ao Seu Cuidado</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            Nossa equipe une formação técnica rigorosa, constante atualização e um olhar humanizado para acompanhar cada etapa do seu processo terapêutico.
          </p>
        </div>

        {/* 3 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              data-testid={member.testId}
              className="rounded-3xl bg-white p-8 border border-brand-sand/30 shadow-sm hover:shadow-brand-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Professional Photo Placeholder Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-offwhite via-brand-sky/20 to-brand-royal/20 p-1.5 border border-brand-sand/40 flex items-center justify-center shadow-inner">
                    <div className="w-full h-full rounded-full bg-brand-offwhite flex flex-col items-center justify-center text-brand-royal">
                      <User className="w-12 h-12 text-brand-royal/60 mb-1" strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-widest text-brand-slate/70 font-semibold">[Foto em breve]</span>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-wider text-brand-navy">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-royal mt-1">
                    {member.role}
                  </p>

                  {/* CREFITO Badge / Indicator */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-offwhite text-brand-slate text-[11px] font-medium mt-3 border border-brand-sand/30">
                    <Award className="w-3 h-3 text-brand-royal" strokeWidth={1.5} />
                    <span>CREFITO: {member.crefito}</span>
                  </div>
                </div>

                {/* Areas of Focus */}
                <div className="space-y-3 py-4 border-t border-brand-sand/20 text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
                    Áreas de Atuação:
                  </p>
                  <p className="text-xs font-medium text-brand-royal leading-relaxed">
                    {member.specialties}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Direct Appointment CTA */}
              <div className="pt-6 border-t border-brand-sand/20">
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de agendar um atendimento com ${member.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`cta-team-${member.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-brand-royal hover:bg-brand-royal-dark text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Agendar com {member.name.replace('Dr. ', '').replace('Dra. ', '')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
