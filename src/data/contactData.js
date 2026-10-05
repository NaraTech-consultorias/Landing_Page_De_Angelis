/**
 * Dados de Contato, Localização e Integrações da De Angelis Fisioterapia
 * [PENDÊNCIAS MARCADAS COMO PLACEHOLDER PARA CONFIGURAÇÃO FINAL]
 */

export const CONTACT_INFO = {
  clinicName: "De Angelis Fisioterapia",
  slogan: "Cuidar do corpo. Equilibrar a vida. Transformar caminhos.",
  closingPhrase: "Todo processo de transformação começa com um cuidado.",
  
  // WhatsApp oficial (placeholder identificado)
  whatsappNumber: "5500000000000", // [PENDÊNCIA: Inserir número oficial do WhatsApp]
  whatsappDisplay: "(00) 00000-0000", // [PENDÊNCIA: Inserir telefone de exibição]
  defaultMessage: "Olá! Gostaria de agendar uma avaliação na De Angelis Fisioterapia.",
  
  // Redes Sociais e Endereço (placeholder identificado)
  instagram: "@deangelisfisioterapia", // [PENDÊNCIA: Inserir Instagram oficial]
  instagramUrl: "https://instagram.com/",
  address: "Espaço reservado, acolhedor e com total acessibilidade", // [PENDÊNCIA: Inserir endereço completo]
  neighborhood: "Localização de fácil acesso e estacionamento",
  cityState: "Atendimento exclusivo com hora marcada",
  businessHours: "Segunda a Sexta — Horários previamente agendados",
  
  // Endereço de busca no Google Maps (Insira o endereço oficial ou CEP)
  addressQuery: "De Angelis Fisioterapia",
  
  // Links de Rotas & Mapa
  googleMapsLink: "https://maps.google.com/?q=De+Angelis+Fisioterapia",
  wazeLink: "https://waze.com/ul?q=De+Angelis+Fisioterapia"
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT_INFO.defaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;
};
