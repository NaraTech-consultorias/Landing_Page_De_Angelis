import React, { useState } from 'react';
import { Camera, Sparkles, MessageCircle, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const GaleriaEspaco = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      src: '/assets/clinic/IMG_2595.webp',
      alt: 'Recepção acolhedora e sala de espera confortável',
      title: 'Recepção & Sala de Espera',
      category: 'Acolhimento & Conforto'
    },
    {
      src: '/assets/clinic/IMG_7936.webp',
      alt: 'Estúdio equipado para Pilates Clínico e reabilitação postural',
      title: 'Estúdio de Pilates Clínico',
      category: 'Movimento & Reeducação'
    },
    {
      src: '/assets/clinic/IMG_7941.webp',
      alt: 'Consultório privativo para avaliação e fisioterapia clínica',
      title: 'Consultório de Fisioterapia',
      category: 'Avaliação & Cuidado Individual'
    },
    {
      src: '/assets/clinic/IMG_3782.webp',
      alt: 'Acesso aos consultórios privativos e climatizados',
      title: 'Ambiente Reservado & Silencioso',
      category: 'Privacidade & Conforto'
    },
    {
      src: '/assets/clinic/IMG_7937.webp',
      alt: 'Ambiente preparado para terapias integrativas e liberação miofascial',
      title: 'Espaço de Terapias Integradas',
      category: 'Acupuntura & Liberação'
    },
    {
      src: '/assets/clinic/IMG_7950.webp',
      alt: 'Estrutura completa, moderna e climatizada para seu bem-estar',
      title: 'Infraestrutura Moderna',
      category: 'Estrutura Exclusiva'
    }
  ];

  return (
    <section
      id="espaco"
      data-testid="galeria-espaco-section"
      className="py-12 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-offwhite border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-3 sm:mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Estrutura & Conforto</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-3 sm:mb-4">
            Nosso Espaço Clínico <br />
            <span className="text-brand-royal text-xl sm:text-3xl md:text-4xl font-normal block mt-1">Ambiente Reservado & Acolhedor</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-brand-slate leading-relaxed">
            Planejado em cada detalhe para proporcionar privacidade, segurança, acessibilidade e bem-estar durante cada sessão de tratamento.
          </p>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-12">
          {photos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-offwhite border border-brand-sand/30 shadow-sm hover:shadow-brand-card transition-all duration-300 cursor-pointer h-64 sm:h-72"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay & Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-brand-sky bg-brand-navy/70 px-2.5 py-1 rounded-full backdrop-blur-sm mb-2 border border-brand-sky/20">
                  {item.category}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-semibold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Action */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-offwhite border border-brand-sand/40 max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="font-heading text-lg sm:text-2xl uppercase tracking-wider text-brand-navy font-semibold">
              Venha conhecer nosso espaço de perto
            </h4>
            <p className="text-xs sm:text-sm text-brand-slate mt-1">
              Atendimento exclusivo com hora marcada em ambiente privativo e acolhedor.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar uma visita e avaliação na clínica De Angelis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-royal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-royal-dark transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            <span>Agendar Atendimento</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-brand-navy/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-navy/80 text-white flex items-center justify-center hover:bg-brand-royal transition-colors"
              aria-label="Fechar visualização da foto"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[70vh] object-contain rounded-2xl mb-4 mx-auto"
            />

            <h3 className="font-heading text-xl uppercase tracking-wider text-brand-navy font-semibold">
              {selectedImage.title}
            </h3>
            <p className="text-xs text-brand-slate mt-1">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
