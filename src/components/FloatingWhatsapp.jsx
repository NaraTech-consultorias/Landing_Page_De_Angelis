import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const FloatingWhatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Tooltip Label */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-brand-navy text-white text-xs font-semibold tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-brand-sky/20">
        Agendar Atendimento
      </span>

      {/* Floating Button in Brand Royal Color */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-cta"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-royal text-white hover:bg-brand-royal-dark transition-all duration-300 shadow-[0_10px_30px_rgba(21,61,148,0.4)] hover:shadow-brand-glow hover:scale-110 flex items-center justify-center relative border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-brand-sky/40"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
        
        {/* Soft pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-brand-sky/30 animate-ping pointer-events-none opacity-40" />
      </a>
    </aside>
  );
};
