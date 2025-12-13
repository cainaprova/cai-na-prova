// Lógica para quizzes e questões
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

// Função para buscar questões por categoria
export const getQuestionsByCategory = async (category: string): Promise<Question[]> => {
  // Simulação - em produção, buscar do Supabase ou API
  const mockQuestions: Question[] = [
    {
      id: '1',
      question: 'Qual é a capital do Brasil?',
      options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'],
      correctAnswer: 2,
      explanation: 'Brasília é a capital federal do Brasil desde 1960.'
    },
    {
      id: '2',
      question: 'Quanto é 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: '2 + 2 = 4'
    }
  ];

  return mockQuestions;
};

// Função para calcular pontuação
export const calculateScore = (answers: number[], questions: Question[]): number => {
  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswer) {
      score++;
    }
  });
  return score;
};