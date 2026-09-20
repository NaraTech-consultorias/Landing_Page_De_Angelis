import React from 'react';
import { HeartHandshake, Sparkles, UserCheck, CalendarCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const Apresentacao = () => {
  return (
    <section
      id="sobre"
      data-testid="apresentacao-section"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Card / Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-brand-offwhite p-8 sm:p-10 border border-brand-sand/40 shadow-sm overflow-hidden">
              {/* Background delicate glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-sky/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-royal text-white flex items-center justify-center shadow-md">
                  <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <blockquote className="font-accent italic text-2xl sm:text-3xl text-brand-navy leading-snug">
                  "Seu corpo em equilíbrio. <br />
                  Você em movimento."
                </blockquote>

                <p className="text-sm text-brand-slate leading-relaxed">
                  Cuidar não significa apenas tratar um sintoma. Significa compreender a pessoa como um todo, respeitando seu tempo e acolhendo suas particularidades.
                </p>

                <div className="pt-4 border-t border-brand-sand/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-sand/30 flex items-center justify-center text-brand-royal font-semibold">
                    <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">De Angelis Fisioterapia</p>
                    <p className="text-xs text-brand-slate">Atendimento Individualizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Copy from Brand Book */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide">
              <span>Apresentação da Marca</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight">
              Um cuidado pensado <br />
              <span className="text-brand-royal">para o seu tempo e o seu corpo</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
              A <strong className="font-semibold text-brand-navy">De Angelis Fisioterapia</strong> nasce com a proposta de oferecer um cuidado individualizado, integrando fisioterapia, movimento e terapias complementares.
            </p>

            <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
              Cada pessoa possui uma história, um corpo e um tempo próprio. Por isso, acreditamos em um atendimento que começa pela escuta atenta, respeita a individualidade e considera diferentes possibilidades terapêuticas para construir um caminho de cuidado eficaz e acolhedor.
            </p>

            <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
              Em um ambiente acolhedor, reservado e acessível, cada atendimento é realizado com hora marcada de forma exclusiva, pensado para oferecer atenção integral, segurança e qualidade ao longo de todo o processo.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-offwhite/60 border border-brand-sand/30">
                <UserCheck className="w-5 h-5 text-brand-royal flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-semibold text-sm text-brand-navy">Escuta e Individualidade</h4>
                  <p className="text-xs text-brand-slate mt-0.5">Avaliação completa sem protocolos genéricos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-offwhite/60 border border-brand-sand/30">
                <CalendarCheck className="w-5 h-5 text-brand-royal flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-semibold text-sm text-brand-navy">Exclusividade e Pontualidade</h4>
                  <p className="text-xs text-brand-slate mt-0.5">Atendimentos reservados com hora marcada.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Olá! Li sobre o cuidado individualizado da De Angelis e gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="apresentacao-whatsapp-cta"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand-royal hover:text-brand-royal-dark transition-colors group"
              >
                <span>Conheça nosso atendimento exclusivo</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
