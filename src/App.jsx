import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadQualificacao } from './components/LeadQualificacao';
import { Especialidades } from './components/Especialidades';
import { Equipe } from './components/Equipe';
import { PorQueEscolher } from './components/PorQueEscolher';
import { Apresentacao } from './components/Apresentacao';
import { MissaoVisaoValores } from './components/MissaoVisaoValores';
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

        {/* 4. 9 Terapias & Especialidades (PRIORIDADE TOTAL NO TOPO) */}
        <Especialidades />

        {/* 5. Corpo Clínico / Equipe */}
        <Equipe />

        {/* 6. Por Que Escolher a De Angelis (Diferenciais) */}
        <PorQueEscolher />

        {/* 7. Apresentação da Clínica (Sobre Nós / Avaliação) */}
        <Apresentacao />

        {/* 8. Missão, Visão e 8 Valores */}
        <MissaoVisaoValores />

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
