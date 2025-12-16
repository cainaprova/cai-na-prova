import { notFound } from "next/navigation";

const slugToNome: Record<string, string> = {
  'certificacoes': 'Certificações',
  'concursos': 'Concursos Públicos',
  'vestibular': 'Vestibular',
  'detran': 'Detran',
  'materias-escolares': 'Matérias Escolares',
};

type PageProps = { params: { tipo: string } };

export default function SimuladosTipoPage({ params }: PageProps) {
  const tipo = params?.tipo;
  const nome = slugToNome[tipo] || null;
  if (!nome) return notFound();
  return (
    <div className="text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Simulados de {nome}</h1>
      {/* Listar simulados desse tipo aqui */}
      <p>Lista de simulados para {nome}.</p>
    </div>
  );
}
