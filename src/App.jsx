import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadQualificacao } from './components/LeadQualificacao';
import { Especialidades } from './components/Especialidades';
import { GaleriaEspaco } from './components/GaleriaEspaco';
import { Equipe } from './components/Equipe';
import { PorQueEscolher } from './components/PorQueEscolher';
import { Apresentacao } from './components/Apresentacao';
import { MissaoVisaoValores } from './components/MissaoVisaoValores';
import { FaqSection } from './components/FaqSection';
import { LocalizacaoMapa } from './components/LocalizacaoMapa';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-offwhite text-brand-navy font-sans antialiased overflow-x-hidden selection:bg-brand-royal selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Lead Qualification (Para Quem é / Queixas Rápidas) */}
        <LeadQualificacao />

        {/* 4. 9 Terapias & Especialidades (PRIORIDADE TOTAL NO TOPO) */}
        <Especialidades />

        {/* 5. Galeria de Fotos Reais do Espaço Clínico */}
        <GaleriaEspaco />

        {/* 6. Corpo Clínico / Equipe Especializada */}
        <Equipe />

        {/* 7. Diferenciais da Clínica */}
        <PorQueEscolher />

        {/* 8. Apresentação da Clínica (Sobre Nós & Avaliação Individual) */}
        <Apresentacao />

        {/* 9. Missão, Visão e 8 Valores */}
        <MissaoVisaoValores />

        {/* 10. FAQ / Dúvidas Frequentes */}
        <FaqSection />

        {/* 11. Localização & Mapa Interativo */}
        <LocalizacaoMapa />

        {/* 12. CTA Final & Contato */}
        <CtaFinal />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating WhatsApp Action Button */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
