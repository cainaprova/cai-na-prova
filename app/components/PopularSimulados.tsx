import { GraduationCap, Briefcase, Award, Car } from 'lucide-react';

const categories = [
  {
    title: 'Vestibular',
    items: [
      { name: 'ENEM', desc: 'Prepare-se para o vestibular mais importante', icon: GraduationCap },
      { name: 'FUVEST', desc: 'Vestibular da USP', icon: GraduationCap },
      { name: 'ETEC', desc: 'Cursos técnicos e vestibulares', icon: GraduationCap }
    ]
  },
  {
    title: 'Concursos Públicos',
    items: [
      { name: 'PM', desc: 'Polícia Militar', icon: Briefcase },
      { name: 'PF', desc: 'Polícia Federal', icon: Briefcase },
      { name: 'Tribunais', desc: 'Concursos para tribunais', icon: Briefcase }
    ]
  },
  {
    title: 'Certificações de Tecnologia',
    items: [
      { name: 'AWS', desc: 'Amazon Web Services', icon: Award },
      { name: 'Azure', desc: 'Microsoft Azure', icon: Award },
      { name: 'Google Cloud', desc: 'Google Cloud Platform', icon: Award }
    ]
  },
  {
    title: 'Detran',
    items: [
      { name: 'Prova teórica', desc: 'Legislação de trânsito', icon: Car },
      { name: 'Simulado CNH', desc: 'Simulado completo', icon: Car }
    ]
  }
];

export default function PopularSimulados() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Simulados Populares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-max">
          {categories.map(category => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer h-32 flex flex-col justify-between">
                      <div>
                        <Icon className="w-8 h-8 text-blue-400 mb-2" />
                        <h4 className="text-white font-semibold">{item.name}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}