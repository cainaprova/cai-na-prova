import AdBanner from '../components/AdBanner';

export default function Enem() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdBanner />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          ENEM - Exame Nacional do Ensino Médio
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Prepare-se com simulados, videoaulas e materiais exclusivos para o ENEM.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Simulados</h2>
            <p className="text-gray-600 mb-4">Teste seus conhecimentos com provas completas.</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Fazer Simulado
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Videoaulas</h2>
            <p className="text-gray-600 mb-4">Aulas explicativas por matéria.</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Ver Videoaulas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}