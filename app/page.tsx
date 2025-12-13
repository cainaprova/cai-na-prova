import AdBanner from './components/AdBanner';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdBanner />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Bem-vindo ao Cai Na Prova!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Plataforma completa para seus estudos: ENEM, DETRAN e ETEC.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-2">ENEM</h2>
            <p className="text-gray-700 mb-4">Prepare-se para o vestibular mais importante do Brasil.</p>
            <a href="/enem" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Acessar ENEM
            </a>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-600 mb-2">DETRAN</h2>
            <p className="text-gray-700 mb-4">Estude legislação de trânsito e prepare-se para a prova.</p>
            <a href="/detran" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Acessar DETRAN
            </a>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">ETEC</h2>
            <p className="text-gray-700 mb-4">Cursos técnicos e vestibulares para sua carreira.</p>
            <a href="/etec" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Acessar ETEC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
