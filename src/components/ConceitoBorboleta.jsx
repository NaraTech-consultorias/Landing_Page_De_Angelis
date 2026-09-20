import React from 'react';
import { Sparkles, Layers, ShieldCheck, Heart } from 'lucide-react';

export const ConceitoBorboleta = () => {
  return (
    <section
      id="essencia"
      data-testid="conceito-borboleta-section"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-offwhite to-brand-offwhite relative overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Nossa Essência</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Transformação como Essência
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            A borboleta, símbolo central da identidade visual da De Angelis, representa aquilo em que acreditamos: <strong>a transformação não acontece de uma hora para outra</strong>.
          </p>
        </div>

        {/* Central Card with Butterfly and Metaphor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Graphic Representation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-white border border-brand-sand/40 shadow-brand-subtle text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/10 to-transparent pointer-events-none" />
            
            <img
              src="/assets/butterfly.png"
              alt="Símbolo da Transformação De Angelis"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain animate-float-slow drop-shadow-md mb-6 relative z-10"
            />

            <p className="font-heading text-lg tracking-wider uppercase text-brand-navy font-semibold relative z-10">
              O Símbolo da Transformação
            </p>
            <p className="text-xs text-brand-slate mt-1 relative z-10">
              Serenidade • Confiança • Profundidade • Equilíbrio
            </p>
          </div>

          {/* Right Column: Key Principles of Transformation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-brand-sand/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-brand-royal">
                <Layers className="w-6 h-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-brand-navy">
                  Um processo em diferentes fases
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                Assim como a borboleta passa por diferentes fases até alcançar sua forma plena, cada pessoa percorre sua própria jornada de recuperação, descoberta, reabilitação e evolução corporal.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-brand-sand/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-brand-royal">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-brand-navy">
                  Tempo, cuidado e acompanhamento
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                Existe um tempo e um ritmo para cada organismo. Na De Angelis, a transformação acontece através da união entre acompanhamento próximo, conhecimento técnico aprofundado, movimento consciente e respeito absoluto à sua individualidade.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-brand-sand/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-brand-royal">
                <Heart className="w-6 h-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-brand-navy">
                  Significado dos tons de azul
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                Os diferentes tons de azul da nossa paleta oficial traduzem <strong>serenidade, clareza, profundidade e equilíbrio</strong> — valores presentes em cada atendimento realizado na clínica.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
