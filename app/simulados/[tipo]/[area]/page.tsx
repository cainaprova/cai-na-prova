"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useSearchParams, useParams } from "next/navigation";

type Simulado = {
  id: string;
  nome: string;
  descricao?: string;
  tempo: number;
};

export default function SimuladosAreaPage() {
  const params = useParams();
  const tipo = typeof params.tipo === "string" ? params.tipo : Array.isArray(params.tipo) ? params.tipo[0] : "";
  const area = typeof params.area === "string" ? params.area : Array.isArray(params.area) ? params.area[0] : "";
  const searchParams = useSearchParams();
  const dificuldade = searchParams.get("dificuldade") || "";
  const tempo = searchParams.get("tempo") || "";
  const [simulados, setSimulados] = useState<Simulado[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function fetchSimulados() {
      setLoading(true);
      setErro("");
      let query = supabase
        .from("simulados")
        .select("id, nome, descricao, tempo, tipo, area")
        .eq("tipo", tipo)
        .eq("area", area);
      if (dificuldade) {
        // Busca ignorando maiúsculas/minúsculas e acentos
        query = query.ilike("descricao", `%${dificuldade}%`);
      }
      if (tempo) {
        // tempo = 30 (até 30min), 60 (30 a 60min, incluindo 60), 61 (mais de 60min)
        if (tempo === "30") {
          query = query.lte("tempo", 30);
        } else if (tempo === "60") {
          query = query.gte("tempo", 31).lte("tempo", 60); // inclui 60
        } else if (tempo === "61") {
          query = query.gt("tempo", 60);
        }
      }
      const { data, error } = await query;
      if (error) {
        setErro("Erro ao buscar simulados.");
        setSimulados([]);
      } else {
        setSimulados(data || []);
      }
      setLoading(false);
    }
    fetchSimulados();
  }, [tipo, area, dificuldade, tempo]);

  if (loading) {
    return <div className="text-white p-8">Carregando simulados...</div>;
  }
  if (erro) {
    return <div className="text-white p-8">{erro}</div>;
  }
  if (!simulados.length) {
    return <div className="text-white p-8">Nenhum simulado encontrado para esta área.</div>;
  }
  return (
    <div className="text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Simulados: {area.replace(/-/g, ' ').toUpperCase()}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {simulados.map(simulado => (
          <Link key={simulado.id} href={`/simulado/${simulado.id}`} className="block bg-gray-800 rounded-lg p-6 hover:bg-blue-900 transition">
            <h2 className="text-xl font-semibold mb-2">{simulado.nome}</h2>
            {simulado.descricao && <p className="text-gray-300">{simulado.descricao}</p>}
            <div className="mt-2 text-sm text-gray-400">Tempo: {simulado.tempo} minutos</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
