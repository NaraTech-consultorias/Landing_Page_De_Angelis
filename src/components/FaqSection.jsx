import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/contactData';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como funciona a primeira sessão de avaliação?",
      answer: "A primeira consulta é dedicada a uma escuta detalhada da sua história, análise de exames e testes físicos de mobilidade, postura e força. A partir dessa avaliação, construímos um plano de tratamento 100% individualizado para suas metas e necessidades."
    },
    {
      question: "Preciso de encaminhamento médico para fazer fisioterapia?",
      answer: "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato, plenamente capacitado para diagnosticar funcionalmente o seu quadro e prescrever o tratamento adequado. Caso você já possua pedido ou exames médicos, traga para a consulta."
    },
    {
      question: "Como funciona a exclusividade de atendimento com hora marcada?",
      answer: "Trabalhamos com agenda rigorosamente pontual e atendimentos individuais. Você terá o horário e o profissional dedicados integralmente a você, sem salas de espera cheias ou atendimentos simultâneos."
    },
    {
      question: "A clínica emite recibo/nota para reembolso de plano de saúde?",
      answer: "Sim! Emitimos toda a documentação, laudos e notas fiscais necessárias para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde com facilidade."
    },
    {
      question: "Quais especialidades e técnicas a clínica oferece?",
      answer: "Atuamos com Fisioterapia Clínica, Fisioterapia Pélvica, Fertilidade, RPG, Osteopatia, Liberação Miofascial, Pilates Clínico Integrado, Acupuntura, Auriculoterapia e Florais de Bach."
    }
  ];

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-sand/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-sand/40 text-brand-royal text-xs font-semibold uppercase tracking-extra-wide mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase text-brand-navy leading-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-base text-brand-slate leading-relaxed">
            Respostas para as dúvidas mais comuns sobre nossos atendimentos e tratamentos.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-brand-sand/40 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-heading text-base sm:text-lg font-semibold uppercase tracking-wider text-brand-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-royal flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-brand-slate leading-relaxed border-t border-brand-sand/20 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Lead Banner */}
        <div className="text-center p-6 rounded-2xl bg-white border border-brand-sand/40 shadow-sm">
          <p className="text-sm font-medium text-brand-navy mb-3">
            Ainda tem alguma dúvida sobre o seu tratamento?
          </p>
          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre os tratamentos na De Angelis Fisioterapia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-royal hover:bg-brand-royal-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            <span>Falar com Nossa Equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
