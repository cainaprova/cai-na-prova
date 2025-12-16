"use client";

import { useParams } from "next/navigation";
import { simuladosPerguntasMock } from "../simuladosPerguntasMock";
import { useState, useEffect } from "react";

export default function SimuladoPage() {
  const params = useParams();

  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : "";

  const simulado = simuladosPerguntasMock[id];

  if (!simulado) {
    return <div className="text-white p-8">Simulado não encontrado.</div>;
  }

  // Estados
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [finalizado, setFinalizado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(simulado.tempo * 60);

  // Timer
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

  // Resultado
  const acertos = respostas.filter(
    (r, i) => r === simulado.perguntas[i].correta
  ).length;

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
          {simulado.perguntas.map((p, i) => (
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

        <a href="/" className="text-blue-400 underline">
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
        {pergunta.alternativas.map((alt, i) => (
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

      <div className="flex gap-2">
        <button
          onClick={anterior}
          disabled={indice === 0}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {indice < simulado.perguntas.length - 1 ? (
          <button
            onClick={proxima}
            className="px-4 py-2 bg-blue-700 rounded"
          >
            Próxima
          </button>
        ) : (
          <button
            onClick={finalizar}
            className="px-4 py-2 bg-green-700 rounded"
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
