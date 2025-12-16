import Link from "next/link";
import { notFound } from "next/navigation";

const simuladosMock: Record<string, { id: string; nome: string; descricao: string }[]> = {
  // Certificações
  aws: [
    { id: "aws-practitioner", nome: "AWS Certified Cloud Practitioner", descricao: "Simulado para a certificação básica da AWS." },
    { id: "aws-developer", nome: "AWS Certified Developer", descricao: "Simulado para desenvolvedores AWS." },
    { id: "aws-solutions", nome: "AWS Solutions Architect", descricao: "Simulado para arquitetos de soluções AWS." },
  ],
  azure: [
    { id: "azure-fundamentals", nome: "Azure Fundamentals", descricao: "Simulado para fundamentos do Azure." },
    { id: "azure-developer", nome: "Azure Developer", descricao: "Simulado para desenvolvedores Azure." },
  ],
  "google-cloud": [
    { id: "gcp-associate", nome: "Google Cloud Associate", descricao: "Simulado para Google Cloud Associate." },
    { id: "gcp-professional", nome: "Google Cloud Professional", descricao: "Simulado para Google Cloud Professional." },
  ],
  comptia: [
    { id: "comptia-a-plus", nome: "CompTIA A+", descricao: "Simulado para CompTIA A+." },
    { id: "comptia-security-plus", nome: "CompTIA Security+", descricao: "Simulado para CompTIA Security+." },
  ],
  linux: [
    { id: "linux-essentials", nome: "Linux Essentials", descricao: "Simulado para Linux Essentials." },
    { id: "linux-lpic1", nome: "Linux LPIC-1", descricao: "Simulado para Linux LPIC-1." },
  ],
  // Concursos Públicos
  pm: [
    { id: "pm-sp", nome: "PM-SP", descricao: "Simulado para Polícia Militar de SP." },
    { id: "pm-mg", nome: "PM-MG", descricao: "Simulado para Polícia Militar de MG." },
  ],
  pf: [
    { id: "pf-agente", nome: "PF Agente", descricao: "Simulado para Agente da Polícia Federal." },
    { id: "pf-escrivao", nome: "PF Escrivão", descricao: "Simulado para Escrivão da PF." },
  ],
  tribunais: [
    { id: "tj-sp", nome: "TJ-SP", descricao: "Simulado para Tribunal de Justiça de SP." },
    { id: "trf3", nome: "TRF-3", descricao: "Simulado para Tribunal Regional Federal da 3ª Região." },
  ],
  inss: [
    { id: "inss-tecnico", nome: "INSS Técnico", descricao: "Simulado para Técnico do INSS." },
    { id: "inss-analista", nome: "INSS Analista", descricao: "Simulado para Analista do INSS." },
  ],
  bancos: [
    { id: "bb", nome: "Banco do Brasil", descricao: "Simulado para Banco do Brasil." },
    { id: "caixa", nome: "Caixa Econômica Federal", descricao: "Simulado para Caixa." },
  ],
  // Vestibular
  enem: [
    { id: "enem-2024", nome: "ENEM 2024", descricao: "Simulado com questões do ENEM 2024." },
    { id: "enem-2023", nome: "ENEM 2023", descricao: "Simulado com questões do ENEM 2023." },
    { id: "enem-matematica", nome: "ENEM Matemática", descricao: "Simulado focado em matemática do ENEM." },
  ],
  fuvest: [
    { id: "fuvest-2024", nome: "FUVEST 2024", descricao: "Simulado com questões da FUVEST 2024." },
    { id: "fuvest-2023", nome: "FUVEST 2023", descricao: "Simulado com questões da FUVEST 2023." },
  ],
  etec: [
    { id: "etec-2024", nome: "ETEC 2024", descricao: "Simulado com questões da ETEC 2024." },
    { id: "etec-2023", nome: "ETEC 2023", descricao: "Simulado com questões da ETEC 2023." },
  ],
  // Detran
  "prova-teorica": [
    { id: "detran-teorica", nome: "Prova Teórica DETRAN", descricao: "Simulado para prova teórica do DETRAN." },
  ],
  "simulado-cnh": [
    { id: "detran-cnh", nome: "Simulado CNH", descricao: "Simulado para CNH do DETRAN." },
  ],
  // Matérias Escolares
  matematica: [
    { id: "matematica-basica", nome: "Matemática Básica", descricao: "Simulado de matemática básica." },
    { id: "matematica-avancada", nome: "Matemática Avançada", descricao: "Simulado de matemática avançada." },
  ],
  portugues: [
    { id: "portugues-basico", nome: "Português Básico", descricao: "Simulado de português básico." },
    { id: "portugues-avancado", nome: "Português Avançado", descricao: "Simulado de português avançado." },
  ],
  historia: [
    { id: "historia-brasil", nome: "História do Brasil", descricao: "Simulado de história do Brasil." },
    { id: "historia-mundo", nome: "História Mundial", descricao: "Simulado de história mundial." },
  ],
  geografia: [
    { id: "geografia-brasil", nome: "Geografia do Brasil", descricao: "Simulado de geografia do Brasil." },
    { id: "geografia-mundo", nome: "Geografia Mundial", descricao: "Simulado de geografia mundial." },
  ],
  ciencias: [
    { id: "ciencias-naturais", nome: "Ciências Naturais", descricao: "Simulado de ciências naturais." },
    { id: "ciencias-biologicas", nome: "Ciências Biológicas", descricao: "Simulado de ciências biológicas." },
  ],
};

const areaSlugToSimuladosKey: Record<string, string> = {
  aws: "aws",
  azure: "azure",
  // Adicione outros conforme necessário
};

type PageProps = { params: { tipo: string; area: string } };

export default async function SimuladosAreaPage(props: PageProps) {
  const params = await props.params;
  const { tipo, area } = params;
  if (!tipo || !area) return notFound();
  // Use slug como chave para mock
  const key = areaSlugToSimuladosKey[area] || area;
  const simulados = simuladosMock[key] || [];
  if (simulados.length === 0) return notFound();
  return (
    <div className="text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Simulados de {area.replace(/-/g, ' ').toUpperCase()}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {simulados.map(simulado => (
          <Link key={simulado.id} href={`/simulado/${simulado.id}`} className="block bg-gray-800 rounded-lg p-6 hover:bg-blue-900 transition">
            <h2 className="text-xl font-semibold mb-2">{simulado.nome}</h2>
            <p className="text-gray-300">{simulado.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
