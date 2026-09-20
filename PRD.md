# Product Requirements Document (PRD)
## Projeto: Landing Page One-Page — De Angelis Fisioterapia

### 1. Visão Geral do Produto
- **Nome do Projeto:** Landing Page De Angelis Fisioterapia
- **Objetivo Principal:** Apresentar a clínica De Angelis Fisioterapia, sua filosofia humanizada e integrada de cuidado, o portfólio de 9 especialidades, os profissionais e seus valores, convertendo visitantes em agendamentos de consulta via WhatsApp.
- **Público-Alvo:** Pessoas que buscam tratamento para dores crônicas ou agudas, reabilitação postural, fisioterapia pélvica, suporte à fertilidade, terapias integrativas (acupuntura, auriculoterapia, florais) e movimento consciente (pilates clínico, osteopatia).
- **Tom de Voz Oficial:** Claro, acolhedor, seguro, próximo, individualizado. Não é fria, mística, distante ou excessivamente técnica.

---

### 2. Personas e Casos de Uso

#### Persona 1: Mariana, 34 anos — Busca por Fisioterapia Pélvica & Fertilidade
- **Contexto:** Em fase de planejamento gestacional / tratamento de fertilidade ou com desconfortos pélvicos.
- **Necessidade:** Um espaço discreto, empático, com atendimento reservado e escuta atenta, onde não seja tratada como mais um número.
- **Ação:** Identifica a especialidade de Fisioterapia Pélvica / Fertilidade e clica no botão de agendamento no WhatsApp.

#### Persona 2: Carlos, 45 anos — Dores na Coluna e Sobrecarga Postural
- **Contexto:** Executivo com rotina sedentária e dores crônicas cervicais/lombares.
- **Necessidade:** Tratamento técnico especializado (RPG, Liberação Miofascial, Osteopatia) com hora marcada rigorosa e atendimento individual exclusivo.
- **Ação:** Lê sobre o método de avaliação individualizada e agenda uma avaliação inicial.

#### Persona 3: Helena, 58 anos — Manutenção da Mobilidade e Terapias Integrativas
- **Contexto:** Deseja equilibrar corpo e mente, buscando Pilates Clínico Integrado, Acupuntura e Florais.
- **Necessidade:** Ambiente acessível, acolhedor, onde seu tempo e ritmo sejam respeitados.
- **Ação:** Conecta-se com a proposta dos 8 valores e entra em contato para conhecer a clínica.

---

### 3. Requisitos Funcionais

| ID | Requisito | Descrição | Prioridade |
|---|---|---|---|
| RF01 | **Hero Section** | Exibição de logo oficial com borboleta, slogan "Cuidar do corpo. Equilibrar a vida. Transformar caminhos.", subtexto e botão CTA direto para WhatsApp. | Alta |
| RF02 | **Apresentação da Marca** | Bloco explicativo sobre o cuidado individualizado, respeito ao tempo de cada pessoa e ambiente reservado com hora marcada. | Alta |
| RF03 | **Conceito da Borboleta** | Seção destacando o símbolo da borboleta e a metáfora da transformação como um processo gradual de fases. | Alta |
| RF04 | **Grid de 9 Especialidades** | Cards interativos para Acupuntura, Auriculoterapia, Florais de Bach, Fisioterapia Pélvica, Fertilidade, RPG, Liberação Miofascial, Osteopatia e Pilates Clínico Integrado com ícones Lucide (`strokeWidth={1.5}`). | Alta |
| RF05 | **Missão, Visão e Valores** | Exibição textual fiel da Missão, Visão e dos 8 Valores da marca (Individualidade, Acolhimento, Exclusividade, Integração, Respeito ao tempo, Excelência, Humanização, Autonomia). | Média |
| RF06 | **Apresentação da Equipe** | Cards para Hilda, Thailane e Léo Wilson com fotos placeholder elegantes, áreas de atuação e marcação do CREFITO pendente. | Média |
| RF07 | **Diferenciais da Clínica** | Seção destacando atendimento exclusivo, ambiente acessível/reservado, cuidado individualizado e abordagem integrada. | Alta |
| RF08 | **CTA Final de Fechamento** | Frase emocional "Todo processo de transformação começa com um cuidado.", botão de WhatsApp e dados de contato. | Alta |
| RF09 | **Botão Flutuante de WhatsApp** | Botão fixo no canto inferior direito, na paleta oficial da marca, com animação sutil e sem sobrepor o footer. | Alta |
| RF10 | **Links Diretos para WhatsApp** | Links configurados com número e mensagem pré-formatada: `"Olá! Gostaria de agendar um atendimento na De Angelis Fisioterapia."` | Alta |

---

### 4. Requisitos Não-Funcionais

- **Design System e Cores:** Uso estrito das cores do Brand Book (`#F2EDE6`, `#59B8E9`, `#153D94`, `#406489`, `#C7B49D`, `#CCB17C`, `#121A37`, `#FFFFFF`).
- **Tipografia:** Cormorant SC para títulos e Montserrat para textos corridos.
- **Responsividade:** 100% otimizado para dispositivos móveis, tablets e desktops (Mobile-First).
- **Acessibilidade & QA:** Tags semânticas HTML5, contrastes WCAG AA e atributo `data-testid` em todos os elementos interativos.
- **SEO & Metadados:** Meta title, meta description, OpenGraph tags, viewport e favicon configurados.
- **Performance:** Carregamento ultra-rápido via Vite e assets otimizados.

---

### 5. Lista de Pendências e Placeholders Identificáveis

1. **CREFITO:** Inserido no código como `[Aguardando envio do cliente]` para Hilda, Thailane e Léo Wilson.
2. **Fotos da Equipe & Ambiente:** Utilizados placeholders refinados com avatar/silhueta e indicação no código.
3. **Telefone/WhatsApp da Clínica:** Número padrão configurável no arquivo de constantes (`src/data/contactData.js`).
4. **Endereço e Instagram:** Marcados claramente em `src/data/contactData.js` para fácil atualização.
