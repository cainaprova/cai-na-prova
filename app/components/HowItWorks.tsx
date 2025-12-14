import { Search, FileText, BarChart, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Escolha o simulado', desc: 'Selecione o simulado ideal para seus estudos' },
  { icon: FileText, title: 'Faça a prova', desc: 'Responda as questões no tempo determinado' },
  { icon: BarChart, title: 'Veja seu desempenho', desc: 'Analise seus acertos e erros detalhadamente' },
  { icon: TrendingUp, title: 'Evolua até a aprovação', desc: 'Pratique regularmente e melhore seu desempenho' }
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}