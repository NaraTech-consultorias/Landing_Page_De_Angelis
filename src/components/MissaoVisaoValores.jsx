import React from 'react';
import { Target, Compass, Heart, Shield } from 'lucide-react';
import { MISSION_VISION, BRAND_VALUES } from '../data/valuesData';

export const MissaoVisaoValores = () => {
  return (
    <section
      id="valores"
      data-testid="missao-visao-valores-section"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Nossos Princípios</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Missão, Visão e Valores
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            O compromisso ético, humano e técnico que norteia cada atendimento e cada escolha na De Angelis.
          </p>
        </div>

        {/* Mission and Vision 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div
            data-testid="card-missao"
            className="p-8 sm:p-10 rounded-3xl bg-brand-offwhite border border-brand-sand/40 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-royal text-white flex items-center justify-center shadow-md mb-2">
                <Target className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-brand-navy">
                {MISSION_VISION.mission.title}
              </h3>
              <p className="text-base sm:text-lg font-medium text-brand-royal leading-snug">
                {MISSION_VISION.mission.short}
              </p>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                {MISSION_VISION.mission.full}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            data-testid="card-visao"
            className="p-8 sm:p-10 rounded-3xl bg-brand-offwhite border border-brand-sand/40 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-royal text-white flex items-center justify-center shadow-md mb-2">
                <Compass className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-brand-navy">
                {MISSION_VISION.vision.title}
              </h3>
              <p className="text-base sm:text-lg font-medium text-brand-royal leading-snug">
                {MISSION_VISION.vision.short}
              </p>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                {MISSION_VISION.vision.full}
              </p>
            </div>
          </div>

        </div>

        {/* 8 Brand Values Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-brand-navy">
              Nossos 8 Valores Fundamentais
            </h3>
            <p className="text-sm text-brand-slate mt-2">
              Pilares que sustentam a nossa conduta e a experiência de cada paciente.
            </p>
          </div>

          <div
            data-testid="valores-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {BRAND_VALUES.map((val) => (
              <div
                key={val.id}
                data-testid={`value-card-${val.id}`}
                className="p-6 rounded-2xl bg-brand-offwhite/70 border border-brand-sand/30 hover:border-brand-royal/40 hover:bg-white hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-lg font-bold text-brand-royal">
                      {val.number}
                    </span>
                    <Heart className="w-4 h-4 text-brand-sand" strokeWidth={1.5} />
                  </div>

                  <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-navy mb-2">
                    {val.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
