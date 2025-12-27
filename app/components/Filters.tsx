'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const tipos = [
  { nome: 'Certificações', slug: 'certificacoes' },
  { nome: 'Concursos Públicos', slug: 'concursos' },
  { nome: 'Vestibular', slug: 'vestibular' },
  { nome: 'Detran', slug: 'detran' },
  { nome: 'Matérias Escolares', slug: 'materias-escolares' },
];

const areasBySlug: Record<string, string[]> = {
  'certificacoes': ['AWS', 'Azure', 'Google Cloud', 'CompTIA', 'Linux'],
  'concursos': ['PM', 'PF', 'Tribunais', 'INSS', 'Bancos'],
  'vestibular': ['ENEM', 'FUVEST', 'ETEC'],
  'detran': ['Prova teórica', 'Simulado CNH'],
  'materias-escolares': ['Matemática', 'Português', 'História', 'Geografia', 'Ciências']
};

function slugify(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

export default function Filters() {
  const [tipo, setTipo] = useState('');
  const [area, setArea] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [tempo, setTempo] = useState('');
  const router = useRouter();

  return (
    <section id="filters" className="bg-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <select
            className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 w-full sm:w-auto text-sm sm:text-base"
            value={tipo}
            onChange={(e) => {
              setTipo(e.target.value);
              setArea('');
            }}
          >
            <option value="" disabled>Tipo</option>
            {tipos.map((t) => (
              <option key={t.slug} value={t.slug}>{t.nome}</option>
            ))}
          </select>
          <select
            className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 w-full sm:w-auto text-sm sm:text-base"
            value={area}
            onChange={e => setArea(e.target.value)}
            disabled={!tipo}
          >
            <option value="" disabled>Área</option>
            {tipo && areasBySlug[tipo]?.map(areaOpt => (
              <option key={areaOpt} value={slugify(areaOpt)}>{areaOpt}</option>
            ))}
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 w-full sm:w-auto text-sm sm:text-base" value={dificuldade} onChange={e => setDificuldade(e.target.value)}>
            <option value="" disabled>Dificuldade</option>
            <option value="FACIL">Fácil</option>
            <option value="INTERMEDIARIO">Intermediário</option>
            <option value="DIFICIL">Difícil</option>
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 w-full sm:w-auto text-sm sm:text-base" value={tempo} onChange={e => setTempo(e.target.value)}>
            <option value="" disabled>Tempo de prova</option>
            <option value="30">Até 30 minutos</option>
            <option value="60">30 a 60 minutos</option>
            <option value="61">Mais de 60 minutos</option>
          </select>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-150 shadow cursor-pointer ml-2 focus:outline-none"
            onClick={() => {
              if (!tipo) {
                alert('Selecione o tipo de simulado!');
                return;
              }
              if (!area) {
                alert('Selecione a área!');
                return;
              }
              // Padroniza dificuldade para o valor do banco
              let dificuldadePadrao = dificuldade;
              if (dificuldade === 'INTERMEDIARIO') dificuldadePadrao = 'Intermediário';
              if (dificuldade === 'FACIL') dificuldadePadrao = 'Fácil';
              if (dificuldade === 'DIFICIL') dificuldadePadrao = 'Difícil';
              // Padroniza area para o slug do banco
              let areaPadrao = area;
              if (tipo === 'certificacoes' && area === 'aws') areaPadrao = 'aws-cloud';
              if (tipo === 'certificacoes' && area === 'google-cloud') areaPadrao = 'google-cloud';
              if (tipo === 'certificacoes' && area === 'azure') areaPadrao = 'azure';
              // Adicione outros casos se necessário
              router.push(`/simulados/${tipo}/${areaPadrao}?dificuldade=${dificuldadePadrao}&tempo=${tempo}`);
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}