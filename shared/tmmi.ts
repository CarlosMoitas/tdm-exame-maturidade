/**
 * TMMi (Test Maturity Model integration) Constants and Types
 */

export const TMMI_PILLARS = [
  {
    id: 1,
    name: "Planejamento e Estratégia de TDM",
    description: "Capacidade de definir estratégia, escopo e abordagem de Test Data Management",
    icon: "📋",
  },
  {
    id: 2,
    name: "Projeto de Dados de Teste",
    description: "Capacidade de modelar, estruturar e definir regras para dados de teste",
    icon: "🎯",
  },
  {
    id: 3,
    name: "Provisionamento de Massas",
    description: "Capacidade de gerar, copiar, atualizar e disponibilizar dados de teste",
    icon: "▶️",
  },
  {
    id: 4,
    name: "Qualidade e Análise de Dados",
    description: "Capacidade de validar integridade, consistência e adequação dos dados",
    icon: "🔍",
  },
  {
    id: 5,
    name: "Governança de Dados de Teste",
    description: "Capacidade de gerenciar versionamento, ownership e controle de uso das massas",
    icon: "⚙️",
  },
  {
    id: 6,
    name: "Automação de TDM",
    description: "Capacidade de automatizar geração, mascaramento e refresh de dados",
    icon: "🤖",
  },
  {
    id: 7,
    name: "Métricas e Análise de TDM",
    description: "Capacidade de coletar e analisar indicadores de eficiência do TDM",
    icon: "📊",
  },
  {
    id: 8,
    name: "Melhoria Contínua em TDM",
    description: "Capacidade de evoluir continuamente os processos de dados de teste",
    icon: "📈",
  },
];

export const MATURITY_LEVELS = [
  {
    level: 1,
    name: "Inicial",
    description: "Dados de teste criados de forma manual, ad hoc e sem padronização",
  },
  {
    level: 2,
    name: "Repetível",
    description: "Massas de dados documentadas e recriáveis de forma consistente",
  },
  {
    level: 3,
    name: "Definido",
    description: "Processos de TDM padronizados e integrados ao ciclo de testes",
  },
  {
    level: 4,
    name: "Gerenciado",
    description: "TDM medido, controlado e com governança estabelecida",
  },
  {
    level: 5,
    name: "Otimizado",
    description: "TDM automatizado, otimizado e com uso de dados sintéticos e analytics",
  },
];

export const EXPRESS_QUESTIONS = [
  {
    id: 1,
    pillar: 1,
    question: "Como a necessidade de dados de teste é considerada no planejamento dos testes e do desenvolvimento?",
    options: [
      { value: 1, label: "Não é considerada" },
      { value: 2, label: "É tratada apenas quando surge o problema" },
      { value: 3, label: "É planejada informalmente por algumas equipes" },
      { value: 4, label: "Faz parte do planejamento oficial dos testes" },
      { value: 5, label: "É planejada estrategicamente e integrada ao SDLC" },
    ],
  },
  {
    id: 2,
    pillar: 2,
    question: "De onde vêm, majoritariamente, os dados utilizados nos testes?",
    options: [
      { value: 1, label: "Cópia direta de produção" },
      { value: 2, label: "Produção com ajustes manuais" },
      { value: 3, label: "Extrações controladas e pontuais" },
      { value: 4, label: "Bases específicas de teste governadas" },
      { value: 5, label: "Dados sintéticos e/ou anonimizados sob demanda" },
    ],
  },
  {
    id: 3,
    pillar: 3,
    question: "Como os dados de teste são provisionados para os ambientes?",
    options: [
      { value: 1, label: "Manual, sob demanda" },
      { value: 2, label: "Scripts manuais e não padronizados" },
      { value: 3, label: "Processo definido, porém pouco automatizado" },
      { value: 4, label: "Pipeline automatizado e versionado" },
      { value: 5, label: "Provisionamento self-service e integrado ao CI/CD" },
    ],
  },
  {
    id: 4,
    pillar: 4,
    question: "Como a privacidade e a proteção de dados são tratadas nos dados de teste?",
    options: [
      { value: 1, label: "Não são tratadas" },
      { value: 2, label: "Dependem de cuidados individuais" },
      { value: 3, label: "Mascaramento básico e manual" },
      { value: 4, label: "Mascaramento automatizado com padrões definidos" },
      { value: 5, label: "Privacy by design, auditável e conforme LGPD" },
    ],
  },
  {
    id: 5,
    pillar: 5,
    question: "Como a qualidade e a representatividade dos dados de teste são garantidas?",
    options: [
      { value: 1, label: "Não são verificadas" },
      { value: 2, label: "Verificações pontuais e manuais" },
      { value: 3, label: "Critérios básicos de qualidade definidos" },
      { value: 4, label: "Validações automáticas e métricas de qualidade" },
      { value: 5, label: "Qualidade monitorada continuamente e otimizada" },
    ],
  },
  {
    id: 6,
    pillar: 6,
    question: "Como os dados de teste são versionados e reutilizados?",
    options: [
      { value: 1, label: "Não há versionamento" },
      { value: 2, label: "Reuso informal e não controlado" },
      { value: 3, label: "Versionamento manual documentado" },
      { value: 4, label: "Versionamento automatizado e rastreável" },
      { value: 5, label: "Reuso inteligente baseado em catálogo e demanda" },
    ],
  },
  {
    id: 7,
    pillar: 7,
    question: "Existe governança definida para dados de teste?",
    options: [
      { value: 1, label: "Não existe" },
      { value: 2, label: "Depende de pessoas específicas" },
      { value: 3, label: "Papéis e responsabilidades definidos" },
      { value: 4, label: "Governança formal com políticas e controles" },
      { value: 5, label: "Governança integrada à governança corporativa de dados" },
    ],
  },
  {
    id: 8,
    pillar: 8,
    question: "Quais métricas são utilizadas para medir a eficiência do TDM?",
    options: [
      { value: 1, label: "Nenhuma" },
      { value: 2, label: "Métricas informais (tempo, esforço percebido)" },
      { value: 3, label: "Métricas básicas documentadas" },
      { value: 4, label: "KPIs claros (lead time, falhas, retrabalho)" },
      { value: 5, label: "Métricas preditivas e orientadas à melhoria contínua" },
    ],
  },
  {
    id: 9,
    pillar: 1,
    question: "Como o TDM se integra às atividades de teste e automação?",
    options: [
      { value: 1, label: "Não se integra" },
      { value: 2, label: "Integração manual e pontual" },
      { value: 3, label: "Integração parcial com scripts" },
      { value: 4, label: "Integrado às ferramentas de teste" },
      { value: 5, label: "Totalmente integrado ao ecossistema DevOps" },
    ],
  },
  {
    id: 10,
    pillar: 3,
    question: "Como a organização evolui suas práticas de TDM ao longo do tempo?",
    options: [
      { value: 1, label: "Não há evolução estruturada" },
      { value: 2, label: "Melhorias reativas" },
      { value: 3, label: "Melhorias planejadas ocasionalmente" },
      { value: 4, label: "Ciclos formais de melhoria contínua" },
      { value: 5, label: "Inovação contínua com uso de dados sintéticos e IA" },
    ],
  },
];

export interface DiagnosisResult {
  maturityLevel: 1 | 2 | 3 | 4 | 5;
  scores: Record<number, number>;
  gaps: Array<{
    pillar: number;
    name: string;
    gap: string;
  }>;
  recommendations: Array<{
    priority: "high" | "medium" | "low";
    title: string;
    description: string;
    pillar: number;
  }>;
  benchmarking: {
    userScore: number;
    marketAverage: number;
    percentile: number;
  };
}
