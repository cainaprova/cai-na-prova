'use client';

import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">Cai Na Prova</div>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Digite o simulado que você deseja encontrar"
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
              Buscar
            </button>
          </div>
        </div>
        <nav className="flex space-x-6 relative">
          <div className="group relative">
            <a href="#" className="hover:text-blue-400 transition cursor-pointer">Simulados</a>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Simulado rápido</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Simulado completo</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Simulado por dificuldade</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Simulado por tempo</a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-blue-400 transition cursor-pointer">Certificações</a>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">AWS</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Azure</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Google Cloud</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">CompTIA</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Linux</a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-blue-400 transition cursor-pointer">Concursos</a>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">PM</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">PF</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Tribunais</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Bancos</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">INSS</a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-blue-400 transition cursor-pointer">Vestibulares</a>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">ENEM</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">FUVEST</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">ETEC</a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-blue-400 transition cursor-pointer">Detran</a>
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Prova teórica</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Simulado CNH</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}