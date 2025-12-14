'use client';

import { Cloud, Shield, BarChart3, Award, Car } from 'lucide-react';


export default function Hero() {
  const scrollToFilters = () => {
    const element = document.getElementById('filters');
    if (element) {
      const yOffset = -80; // ajuste para altura do header fixo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-linear-to-br from-gray-900 to-black text-white py-20 px-4 relative overflow-hidden z-0">
      <div className="container mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-400">
          Tudo o que você precisa para ser aprovado
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Simulados organizados por área, tempo e dificuldade.
        </p>
        <button
          type="button"
          onClick={scrollToFilters}
          style={{ position: 'relative', zIndex: 99999 }}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-150 shadow-lg transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Comece agora
        </button>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Cloud className="absolute top-10 left-10 w-16 h-16 text-blue-400" />
        <Shield className="absolute top-20 right-20 w-20 h-20 text-blue-300" />
        <BarChart3 className="absolute bottom-20 left-20 w-18 h-18 text-blue-500" />
        <Award className="absolute bottom-10 right-10 w-16 h-16 text-blue-400" />
        <Car className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-blue-300" />
      </div>
    </section>
  );
}