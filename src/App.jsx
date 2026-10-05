import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadQualificacao } from './components/LeadQualificacao';
import { Apresentacao } from './components/Apresentacao';
import { Especialidades } from './components/Especialidades';
import { ConceitoBorboleta } from './components/ConceitoBorboleta';
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

        {/* 3. Lead Qualification (Para Quem é / Tratamentos Rápidos) */}
        <LeadQualificacao />

        {/* 4. Apresentação da Clínica */}
        <Apresentacao />

        {/* 5. 9 Especialidades */}
        <Especialidades />

        {/* 6. Nossa Essência / Conceito da Borboleta */}
        <ConceitoBorboleta />

        {/* 7. Missão, Visão e 8 Valores */}
        <MissaoVisaoValores />

        {/* 8. Equipe Profissional */}
        <Equipe />

        {/* 9. Por Que Escolher a De Angelis */}
        <PorQueEscolher />

        {/* 10. Localização & Mapa Interativo */}
        <LocalizacaoMapa />

        {/* 11. CTA Final & Contato */}
        <CtaFinal />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Action Button */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
