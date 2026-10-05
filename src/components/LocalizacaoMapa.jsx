import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Car, ExternalLink, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/contactData';

export const LocalizacaoMapa = () => {
  return (
    <section
      id="localizacao"
      data-testid="localizacao-section"
      className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-sand/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Fácil Acesso & Estrutura</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Onde Estamos
          </h2>

          <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
            Ambiente reservado, acessível e preparado para oferecer total conforto e privacidade no seu atendimento.
          </p>
        </div>

        {/* 2-Column Grid: Location Details Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Location Card & Action Buttons */}
          <div className="lg:col-span-5 rounded-3xl bg-white p-8 sm:p-10 border border-brand-sand/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-royal text-white flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-wider text-brand-navy mb-2">
                  De Angelis Fisioterapia
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-xs font-semibold text-brand-royal mt-1 uppercase tracking-wider">
                  {CONTACT_INFO.cityState}
                </p>
              </div>

              {/* Key Amenities */}
              <div className="space-y-3 pt-4 border-t border-brand-sand/30">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-slate">
                  <Car className="w-4 h-4 text-brand-royal flex-shrink-0" strokeWidth={1.5} />
                  <span>Fácil estacionamento e desembarque</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-slate">
                  <ShieldCheck className="w-4 h-4 text-brand-royal flex-shrink-0" strokeWidth={1.5} />
                  <span>Espaço 100% acessível e privativo</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-slate">
                  <Clock className="w-4 h-4 text-brand-royal flex-shrink-0" strokeWidth={1.5} />
                  <span>{CONTACT_INFO.businessHours}</span>
                </div>
              </div>
            </div>

            {/* Route & Contact CTAs */}
            <div className="pt-6 border-t border-brand-sand/30 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CONTACT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="google-maps-btn"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-offwhite hover:bg-brand-sand/30 text-brand-navy text-xs font-semibold tracking-wider uppercase border border-brand-sand/40 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-royal" strokeWidth={1.5} />
                  <span>Google Maps</span>
                </a>

                <a
                  href={CONTACT_INFO.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="waze-btn"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-offwhite hover:bg-brand-sand/30 text-brand-navy text-xs font-semibold tracking-wider uppercase border border-brand-sand/40 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-royal" strokeWidth={1.5} />
                  <span>Waze</span>
                </a>
              </div>

              <a
                href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a localização e agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-whatsapp-cta"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brand-royal hover:bg-brand-royal-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                <span>Agendar Atendimento</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-sand/40 shadow-sm bg-white min-h-[360px] lg:min-h-full relative">
            <iframe
              title="Mapa de Localização De Angelis Fisioterapia"
              src="https://maps.google.com/maps?q=-22.9068467,-43.1728965&hl=pt-BR&z=15&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-brand-sand/40 shadow-sm text-xs text-brand-navy font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-royal animate-pulse" />
              <span>De Angelis Fisioterapia</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
