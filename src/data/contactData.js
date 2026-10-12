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
  
  // Redes Sociais e Endereço Oficial
  instagram: "@deangelisfisioterapia",
  instagramUrl: "https://instagram.com/",
  address: "R. Cel. Henrique da Fonseca, 79 - A loja",
  neighborhood: "Centro",
  cityState: "Centro, São João de Meriti - RJ • CEP 25520-620",
  fullAddress: "R. Cel. Henrique da Fonseca, 79 - A loja - Centro, São João de Meriti - RJ, 25520-620",
  businessHours: "Segunda a Sexta — Horários previamente agendados",
  
  // Endereço de busca e geolocalização no Google Maps
  addressQuery: "R. Cel. Henrique da Fonseca, 79, Centro, São João de Meriti - RJ, 25520-620",
  
  // Links diretos para navegação por GPS
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Cel.+Henrique+da+Fonseca,+79+-+Centro,+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ,+25520-620",
  wazeLink: "https://waze.com/ul?q=R.+Cel.+Henrique+da+Fonseca,+79+-+Centro,+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ"
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT_INFO.defaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;
};
