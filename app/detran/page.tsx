import AdBanner from '../components/AdBanner';

export default function Detran() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdBanner />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          DETRAN - Departamento de Trânsito
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Estude legislação de trânsito e prepare-se para tirar sua carteira de motorista.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Legislação</h2>
            <p className="text-gray-600 mb-4">Aprenda todas as regras de trânsito.</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Estudar Legislação
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Simulados</h2>
            <p className="text-gray-600 mb-4">Pratique com questões da prova teórica.</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Fazer Simulado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}