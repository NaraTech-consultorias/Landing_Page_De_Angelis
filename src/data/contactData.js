/**
 * Dados de Contato e Integrações da De Angelis Fisioterapia
 * [PENDÊNCIAS MARCADAS COMO PLACEHOLDER PARA CONFIGURAÇÃO FINAL]
 */

export const CONTACT_INFO = {
  clinicName: "De Angelis Fisioterapia",
  slogan: "Cuidar do corpo. Equilibrar a vida. Transformar caminhos.",
  closingPhrase: "Todo processo de transformação começa com um cuidado.",
  
  // WhatsApp oficial (placeholder identificado)
  whatsappNumber: "5500000000000", // [PENDÊNCIA: Inserir número oficial do WhatsApp]
  whatsappDisplay: "(00) 00000-0000", // [PENDÊNCIA: Inserir telefone de exibição]
  defaultMessage: "Olá! Gostaria de agendar um atendimento na De Angelis Fisioterapia.",
  
  // Redes Sociais e Endereço (placeholder identificado)
  instagram: "@deangelisfisioterapia", // [PENDÊNCIA: Inserir Instagram oficial]
  instagramUrl: "https://instagram.com/",
  address: "Espaço reservado, acolhedor e acessível", // [PENDÊNCIA: Inserir endereço completo]
  cityState: "Atendimento exclusivo com hora marcada",
  businessHours: "Segunda a Sexta — Horários previamente agendados",
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT_INFO.defaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;
};
