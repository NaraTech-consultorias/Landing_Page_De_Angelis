import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadQualificacao } from './components/LeadQualificacao';
import { Apresentacao } from './components/Apresentacao';
import { Especialidades } from './components/Especialidades';
import { MissaoVisaoValores } from './components/MissaoVisaoValores';
import { Equipe } from './components/Equipe';
import { PorQueEscolher } from './components/PorQueEscolher';
import { LocalizacaoMapa } from './components/LocalizacaoMapa';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-offwhite text-brand-navy font-sans antialiased overflow-x-hidden selection:bg-brand-royal selection:text-white">
      {/* 1. Fixed Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Lead Qualification (Para Quem é / Queixas Rápidas) */}
        <LeadQualificacao />

        {/* 4. Apresentação da Clínica */}
        <Apresentacao />

        {/* 5. 9 Especialidades */}
        <Especialidades />

        {/* 6. Missão, Visão e 8 Valores */}
        <MissaoVisaoValores />

        {/* 7. Equipe Profissional */}
        <Equipe />

        {/* 8. Por Que Escolher a De Angelis */}
        <PorQueEscolher />

        {/* 9. Localização & Mapa Interativo */}
        <LocalizacaoMapa />

        {/* 10. CTA Final & Contato */}
        <CtaFinal />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Action Button */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
