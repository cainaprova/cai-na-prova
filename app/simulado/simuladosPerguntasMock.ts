// Estrutura de dados mock para simulados com perguntas e alternativas
export const simuladosPerguntasMock: Record<string, {
  id: string;
  nome: string;
  tempo: number; // em minutos
  perguntas: Array<{
    enunciado: string;
    alternativas: string[];
    correta: number; // índice da alternativa correta
  }>;
}> = {
  "aws-practitioner": {
    id: "aws-practitioner",
    nome: "AWS Certified Cloud Practitioner",
    tempo: 60,
    perguntas: [
      {
        enunciado: "O que é a AWS?",
        alternativas: ["Um sistema operacional", "Um provedor de nuvem", "Um banco de dados", "Um navegador web"],
        correta: 1
      },
      {
        enunciado: "Qual serviço AWS é usado para armazenar objetos?",
        alternativas: ["EC2", "Lambda", "S3", "RDS"],
        correta: 2
      }
    ]
  },
  "enem-2024": {
    id: "enem-2024",
    nome: "ENEM 2024",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual é a fórmula da água?",
        alternativas: ["CO2", "H2O", "O2", "NaCl"],
        correta: 1
      },
      {
        enunciado: "Quem foi o primeiro presidente do Brasil?",
        alternativas: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Dom Pedro II"],
        correta: 2
      }
    ]
  }
};
