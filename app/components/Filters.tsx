'use client';

import { useState } from 'react';

export default function Filters() {
  const [tipo, setTipo] = useState('');

  const areas = {
    'Certificações': ['AWS', 'Azure', 'Google Cloud', 'CompTIA', 'Linux'],
    'Concursos': ['PM', 'PF', 'Tribunais', 'INSS', 'Bancos'],
    'Vestibular': ['ENEM', 'FUVEST', 'ETEC'],
    'Detran': ['Prova teórica', 'Simulado CNH'],
    'Matérias Escolares': ['Matemática', 'Português', 'História', 'Geografia', 'Ciências']
  };

  return (
    <section id="filters" className="bg-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Tipo</option>
            <option value="Certificações">Certificações</option>
            <option value="Concursos">Concursos Públicos</option>
            <option value="Vestibular">Vestibular</option>
            <option value="Detran">Detran</option>
            <option value="Matérias Escolares">Matérias Escolares</option>
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600">
            <option value="">Área</option>
            {tipo && areas[tipo as keyof typeof areas]?.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600">
            <option value="">Dificuldade</option>
            <option value="Fácil">Fácil</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Difícil">Difícil</option>
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600">
            <option value="">Tempo de prova</option>
            <option value="Até 30 minutos">Até 30 minutos</option>
            <option value="30 a 60 minutos">30 a 60 minutos</option>
            <option value="Mais de 60 minutos">Mais de 60 minutos</option>
          </select>
        </div>
      </div>
    </section>
  );
}