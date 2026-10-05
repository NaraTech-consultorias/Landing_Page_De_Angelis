import React from 'react';
import { Sparkles, Layers, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const ConceitoBorboleta = () => {
  return (
    <section
      id="essencia"
      data-testid="conceito-borboleta-section"
      className="py-16 lg:py-20 bg-gradient-to-b from-white via-brand-offwhite to-brand-offwhite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Nossa Essência</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-3">
            Transformação como Essência
          </h2>

          <p className="text-base text-brand-slate leading-relaxed">
            A borboleta simboliza nosso compromisso: <strong>evolução, cuidado contínuo e respeito ao tempo do seu corpo</strong>.
          </p>
        </div>

        {/* Central Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-brand-sand/40 shadow-brand-subtle text-center relative overflow-hidden">
            <img
              src="/assets/butterfly.png"
              alt="Símbolo da Transformação De Angelis"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-float-slow drop-shadow-md mb-4"
            />
            <p className="font-heading text-base tracking-wider uppercase text-brand-navy font-semibold">
              Serenidade • Confiança • Equilíbrio
            </p>
          </div>

          {/* Right Column: 3 Key Principles */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-brand-sand/30 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-offwhite text-brand-royal flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-sand/30">
                <Layers className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-brand-navy">
                  Jornada por Fases
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-1">
                  Cada paciente percorre sua própria trajetória de alívio, recuperação e ganho de mobilidade.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-sand/30 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-offwhite text-brand-royal flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-sand/30">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-brand-navy">
                  Acompanhamento Próximo
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-1">
                  Atendimento humanizado e rigor técnico para garantir segurança e evolução real a cada sessão.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-sand/30 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-offwhite text-brand-royal flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-sand/30">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-brand-navy">
                  Cuidado Individual
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-1">
                  Respeito absoluto aos seus limites e metas de saúde corporal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
