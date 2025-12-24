"use client";

import { useParams } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";


export default function SimuladoPage() {
  const params = useParams();
  const id = typeof params.id === "string"
    ? params.id
    : Array.isArray(params.id)
      ? params.id[0]
      : "";

  const [simulado, setSimulado] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [finalizado, setFinalizado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(0);


  useEffect(() => {
    async function fetchSimulado() {
      setLoading(true);
      setErro("");
      // Busca o simulado
      const { data: simuladoData, error: simuladoError } = await supabase
        .from("simulados")
        .select("*, perguntas:perguntas(*, alternativas:alternativas(*))")
        .eq("id", id)
        .single();
      if (simuladoError || !simuladoData) {
        setErro("Simulado não encontrado.");
        setLoading(false);
        return;
      }
      // Ajusta estrutura para compatibilidade com o código existente
      setSimulado({
        id: simuladoData.id,
        nome: simuladoData.nome,
        tempo: simuladoData.tempo,
        perguntas: (simuladoData.perguntas || []).map((p: any) => ({
          enunciado: p.enunciado,
          alternativas: (p.alternativas || []).map((a: any) => a.texto),
          correta: p.correta
        }))
      });
      setLoading(false);
    }
    fetchSimulado();
  }, [id]);


  useEffect(() => {
    if (simulado) {
      setTempoRestante(simulado.tempo * 60);
      // Inicializa respostas com o mesmo tamanho das perguntas, preenchido com undefined
      setRespostas(Array(simulado.perguntas.length).fill(undefined));
      setIndice(0);
      setFinalizado(false);
    }
  }, [simulado]);

  useEffect(() => {
    if (finalizado) return;
    if (tempoRestante <= 0) {
      setFinalizado(true);
      return;
    }
    const timer = setInterval(() => {
      setTempoRestante((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [tempoRestante, finalizado]);

  if (loading) {
    return <div className="text-white p-8">Carregando simulado...</div>;
  }
  if (erro || !simulado) {
    return <div className="text-white p-8">{erro || "Simulado não encontrado."}</div>;
  }

  // Funções
  function responder(i: number) {
    const novas = [...respostas];
    novas[indice] = i;
    setRespostas(novas);
  }

  function proxima() {
    if (indice < simulado.perguntas.length - 1) {
      setIndice((i) => i + 1);
    }
  }

  function anterior() {
    if (indice > 0) {
      setIndice((i) => i - 1);
    }
  }

  function finalizar() {
    setFinalizado(true);
  }

  // Resultado: só conta como acerto se respondeu e acertou
  const acertos = respostas.reduce(
    (acc, r, i) => (typeof r === "number" && r === simulado.perguntas[i].correta ? acc + 1 : acc),
    0
  );

  function formatarTempo(seg: number) {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  // Tela de resultado
  if (finalizado) {
    return (
      <div className="text-white p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Resultado: {simulado.nome}
        </h1>

        <p className="mb-2">
          Acertos: {acertos} de {simulado.perguntas.length}
        </p>

        <p className="mb-2">
          Porcentagem:{" "}
          {((acertos / simulado.perguntas.length) * 100).toFixed(1)}%
        </p>

        <p className="mb-6">
          Tempo restante: {formatarTempo(tempoRestante)}
        </p>

        <h2 className="font-semibold mb-2">Gabarito:</h2>

        <ul className="mb-4">
          {simulado.perguntas.map((p: any, i: number) => (
            <li key={i} className="mb-2">
              <strong>{i + 1}.</strong> {p.enunciado}
              <br />
              Sua resposta:{" "}
              <span
                className={
                  respostas[i] === p.correta
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {typeof respostas[i] === "number"
                  ? p.alternativas[respostas[i]]
                  : "Não respondeu"}
              </span>
              {respostas[i] !== p.correta && (
                <>
                  {" "}
                  | Correta:{" "}
                  <span className="text-green-400">
                    {p.alternativas[p.correta]}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>

        <a href="/" className="text-blue-400 underline block mt-4">
          Voltar ao início
        </a>
      </div>
    );
  }

  // Tela da pergunta
  const pergunta = simulado.perguntas[indice];

  return (
    <div className="text-white p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{simulado.nome}</h1>

      <div className="mb-2">
        Tempo restante:{" "}
        <span className="font-mono">{formatarTempo(tempoRestante)}</span>
      </div>

      <div className="mb-4">
        Pergunta {indice + 1} de {simulado.perguntas.length}
      </div>

      <div className="mb-4 font-semibold">{pergunta.enunciado}</div>

      <div className="mb-6 grid gap-2">
        {pergunta.alternativas.map((alt: string, i: number) => (
          <button
            key={i}
            onClick={() => responder(i)}
            className={`w-full text-left px-4 py-2 rounded border transition ${respostas[indice] === i
              ? "bg-blue-700 border-blue-400"
              : "bg-gray-800 border-gray-600 hover:bg-blue-900"
              }`}
          >
            {alt}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={anterior}
          disabled={indice === 0}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        {indice < simulado.perguntas.length - 1 && (
          <button
            onClick={proxima}
            className="px-4 py-2 bg-blue-700 rounded"
          >
            Próxima
          </button>
        )}
        <button
          onClick={finalizar}
          className="px-4 py-2 bg-green-700 rounded"
        >
          Finalizar
        </button>
        <a href="/" className="px-4 py-2 bg-gray-500 rounded text-white text-center">
          Home
        </a>
      </div>
    </div>
  );
}
