import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function SimuladoPage({ params }: Props) {
  const { id } = params;
  // Aqui você pode buscar os dados do simulado pelo id
  if (!id) return notFound();
  return (
    <div className="text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Simulado #{id}</h1>
      {/* Renderizar questões e lógica do simulado */}
      <p>Aqui o usuário fará o simulado.</p>
    </div>
  );
}
