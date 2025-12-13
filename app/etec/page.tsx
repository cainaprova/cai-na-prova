import AdBanner from '../components/AdBanner';

export default function Etec() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdBanner />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          ETEC - Escolas Técnicas Estaduais
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Prepare-se para vestibulares técnicos e cursos profissionalizantes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vestibulares</h2>
            <p className="text-gray-600 mb-4">Materiais para provas de ingresso.</p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Preparar Vestibular
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cursos Técnicos</h2>
            <p className="text-gray-600 mb-4">Informações sobre cursos disponíveis.</p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Ver Cursos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}