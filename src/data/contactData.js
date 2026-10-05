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
  
  // Links de Rotas & Mapa
  googleMapsLink: "https://maps.google.com/?q=De+Angelis+Fisioterapia",
  wazeLink: "https://waze.com/ul?q=De+Angelis+Fisioterapia",
  // Iframe de visualização de mapa estilizado
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.295484838647!2d-43.1728965!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzI0LjYiUyA0M8KwMTAnMjIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT_INFO.defaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;
};
