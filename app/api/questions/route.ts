import { NextRequest, NextResponse } from 'next/server';
import { getQuestionsByCategory } from '../../lib/quiz';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'general';

    const questions = await getQuestionsByCategory(category);

    return NextResponse.json({
      success: true,
      data: questions
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Erro ao buscar questões'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, questions } = body;

    // Calcular pontuação
    const score = answers.reduce((acc: number, answer: number, index: number) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    return NextResponse.json({
      success: true,
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100)
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Erro ao processar respostas'
    }, { status: 500 });
  }
}