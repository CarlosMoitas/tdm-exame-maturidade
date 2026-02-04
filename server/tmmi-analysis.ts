import { EXPRESS_QUESTIONS, TMMI_PILLARS, DiagnosisResult } from "@shared/tmmi";

/**
 * Processa respostas do diagnóstico express e gera análise
 * Versão LOCAL - sem dependência de IA
 */
export async function analyzeExpressDiagnosis(answers: Record<number, number>): Promise<DiagnosisResult> {
  console.log("Analisando respostas:", answers);
  
  // Calcular scores por pilar
  const pillarScores: Record<number, number[]> = {};
  
  EXPRESS_QUESTIONS.forEach(q => {
    if (!pillarScores[q.pillar]) {
      pillarScores[q.pillar] = [];
    }
    const answerValue = answers[q.id];
    console.log(`Pergunta ${q.id} (Pilar ${q.pillar}): ${answerValue}`);
    pillarScores[q.pillar].push(answerValue || 1);
  });

  console.log("Pillar Scores:", pillarScores);

  // Calcular média por pilar (1-5)
  const scores: Record<number, number> = {};
  Object.entries(pillarScores).forEach(([pillar, values]) => {
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    scores[parseInt(pillar)] = Math.round(average * 10) / 10;
    console.log(`Pilar ${pillar}: ${scores[parseInt(pillar)]}`);
  });

  // Determinar nível de maturidade geral (média de todos os pilares)
  const allScores = Object.values(scores);
  const overallScore = Math.round((allScores.reduce((a, b) => a + b, 0) / allScores.length) * 10) / 10;
  const maturityLevel = Math.ceil(overallScore) as 1 | 2 | 3 | 4 | 5;

  console.log("Overall Score:", overallScore);
  console.log("Maturity Level:", maturityLevel);

  // Identificar 3 principais gaps (pilares com menor score)
  const gapsByScore = Object.entries(scores)
    .map(([pillarId, score]) => ({
      pillar: parseInt(pillarId),
      score,
      name: TMMI_PILLARS.find(p => p.id === parseInt(pillarId))?.name || "",
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  const gaps = gapsByScore.map(gap => ({
    pillar: gap.pillar,
    name: gap.name,
    gap: `Score atual: ${gap.score}/5 - Oportunidade de melhoria identificada`,
  }));

  // Gerar recomendações baseadas nos scores (sem IA)
  const recommendations = generateRecommendations(scores, gaps);

  // Calcular benchmarking
  const marketAverage = 2.8;
  const userPercentile = Math.min(100, Math.round((overallScore / 5) * 100));

  const result: DiagnosisResult = {
    maturityLevel,
    scores,
    gaps,
    recommendations,
    benchmarking: {
      userScore: overallScore,
      marketAverage,
      percentile: userPercentile,
    },
  };

  console.log("Resultado final:", result);
  return result;
}

/**
 * Gera recomendações baseadas nos scores dos pilares
 */
function generateRecommendations(
  scores: Record<number, number>,
  gaps: Array<{ pillar: number; name: string; gap: string }>
): Array<{
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  pillar: number;
}> {
  const recommendations: Array<{
    priority: "high" | "medium" | "low";
    title: string;
    description: string;
    pillar: number;
  }> = [];

  // Mapa de recomendações por pilar (Resultados / Ações – TDM)
const recommendationMap: Record<number, Array<{
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
}>> = {
  1: [
    {
      priority: "high",
      title: "Implementar Estratégia Formal de TDM",
      description: "Documentar e estruturar a estratégia de Test Data Management alinhada ao SDLC",
    },
    {
      priority: "medium",
      title: "Definir Critérios de Uso de Dados",
      description: "Estabelecer critérios claros para criação, uso e descarte de dados de teste",
    },
  ],
  2: [
    {
      priority: "high",
      title: "Padronizar Projeto de Dados de Teste",
      description: "Criar padrões para modelagem, volume, regras e relacionamentos dos dados",
    },
    {
      priority: "medium",
      title: "Implementar Rastreabilidade de Dados",
      description: "Rastrear dados de teste até cenários, casos de teste e requisitos",
    },
  ],
  3: [
    {
      priority: "high",
      title: "Sistematizar Provisionamento de Massas",
      description: "Criar processo formal para geração, carga, cópia e refresh de dados de teste",
    },
    {
      priority: "medium",
      title: "Aumentar Disponibilidade de Massas",
      description: "Garantir dados adequados e atualizados para ambientes e cenários críticos",
    },
  ],
  4: [
    {
      priority: "high",
      title: "Garantir Qualidade dos Dados de Teste",
      description: "Implementar validações de integridade, consistência e aderência aos cenários",
    },
    {
      priority: "medium",
      title: "Analisar Falhas Relacionadas a Dados",
      description: "Identificar padrões e causas raiz de defeitos provocados por dados de teste",
    },
  ],
  5: [
    {
      priority: "medium",
      title: "Controlar Versões de Massas de Dados",
      description: "Implementar versionamento e controle de mudanças nos dados de teste",
    },
    {
      priority: "low",
      title: "Integrar Governança ao Pipeline",
      description: "Automatizar controles de TDM nos pipelines de CI/CD e ambientes de teste",
    },
  ],
  6: [
    {
      priority: "high",
      title: "Automatizar Geração de Dados de Teste",
      description: "Automatizar criação, mascaramento e refresh de dados críticos",
    },
    {
      priority: "medium",
      title: "Criar Pipeline de Automação de TDM",
      description: "Estabelecer framework e padrões para automação de TDM",
    },
  ],
  7: [
    {
      priority: "high",
      title: "Implementar Métricas de TDM",
      description: "Coletar dados sobre lead time, reutilização, falhas e eficiência das massas",
    },
    {
      priority: "medium",
      title: "Criar Dashboard de Indicadores de TDM",
      description: "Visualizar e acompanhar métricas de desempenho do TDM",
    },
  ],
  8: [
    {
      priority: "medium",
      title: "Estabelecer Ciclo de Melhoria em TDM",
      description: "Criar processo contínuo de revisão e evolução do TDM",
    },
    {
      priority: "low",
      title: "Evoluir para Dados Sintéticos e DataOps",
      description: "Adotar técnicas avançadas como dados sintéticos e práticas de DataOps",
    },
  ],
};


  // Adicionar recomendações para os 3 pilares com menor score
  gaps.forEach((gap, index) => {
    const pillarRecs = recommendationMap[gap.pillar];
    if (pillarRecs && pillarRecs[0]) {
      recommendations.push({
        ...pillarRecs[0],
        pillar: gap.pillar,
      });
    }
  });

  // Adicionar recomendações adicionais para outros pilares com score baixo
  Object.entries(scores).forEach(([pillarId, score]) => {
    const pillar = parseInt(pillarId);
    if (score < 3 && !gaps.find(g => g.pillar === pillar)) {
      const pillarRecs = recommendationMap[pillar];
      if (pillarRecs && pillarRecs[1]) {
        recommendations.push({
          ...pillarRecs[1],
          pillar,
        });
      }
    }
  });

  // Garantir que temos pelo menos 5 recomendações
  while (recommendations.length < 5) {
    const randomPillar = Math.floor(Math.random() * 8) + 1;
    const pillarRecs = recommendationMap[randomPillar];
    if (pillarRecs && pillarRecs[1]) {
      recommendations.push({
        ...pillarRecs[1],
        pillar: randomPillar,
      });
    }
  }

  return recommendations.slice(0, 5);
}

/**
 * Gera um resumo em texto da análise para incluir no e-mail
 */
export function generateAnalysisSummary(result: DiagnosisResult): string {
  const levelName = ["Inicial", "Repetível", "Definido", "Gerenciado", "Otimizado"][result.maturityLevel - 1];
  
  return `
Seu Nível de Maturidade TMMi: ${result.maturityLevel}/5 (${levelName})

Pontuação por Pilar:
${Object.entries(result.scores).map(([pillar, score]) => {
  const pillarName = TMMI_PILLARS.find(p => p.id === parseInt(pillar))?.name;
  return `- ${pillarName}: ${score}/5`;
}).join('\n')}

Principais Gaps:
${result.gaps.map(g => `- ${g.name}: ${g.gap}`).join('\n')}

Recomendações Prioritárias:
${result.recommendations.slice(0, 3).map(r => `- [${r.priority.toUpperCase()}] ${r.title}: ${r.description}`).join('\n')}

Benchmarking:
- Seu Score: ${result.benchmarking.userScore}/5
- Média de Mercado: ${result.benchmarking.marketAverage}/5
- Percentil: ${result.benchmarking.percentile}%
  `;
}
