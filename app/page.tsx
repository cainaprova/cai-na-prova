
import EnvDebug from './components/EnvDebug';
import Hero from './components/Hero';
import Filters from './components/Filters';
import PopularSimulados from './components/PopularSimulados';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <div>
      <EnvDebug />
      <Hero />
      <Filters />
      <div className="bg-gray-800 py-4 px-4 text-center">
        <p className="text-gray-400">Espaço reservado para anúncio - Banner horizontal</p>
      </div>
      <PopularSimulados />
      <div className="bg-gray-800 py-8 px-4 text-center">
        <p className="text-gray-400">Espaço reservado para anúncio - Bloco entre seções</p>
      </div>
      <HowItWorks />
    </div>
  );
}
