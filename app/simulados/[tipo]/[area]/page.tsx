import Link from "next/link";
import { notFound } from "next/navigation";

// Exemplos reais para cada área/tipo
const simuladosMock: Record<string, { id: string; nome: string; descricao: string }[]> = {
  // Certificações
  aws: [
    { id: "aws-practitioner", nome: "AWS Certified Cloud Practitioner", descricao: "Simulado para a certificação básica da AWS." },
    { id: "aws-developer", nome: "AWS Certified Developer Associate", descricao: "Simulado para desenvolvedores AWS." },
    { id: "aws-solutions", nome: "AWS Solutions Architect Associate", descricao: "Simulado para arquitetos de soluções AWS." },
  ],
  azure: [
    { id: "azure-fundamentals", nome: "Microsoft Azure Fundamentals (AZ-900)", descricao: "Simulado para fundamentos do Azure." },
    { id: "azure-administrator", nome: "Azure Administrator Associate (AZ-104)", descricao: "Simulado para administradores Azure." },
  ],
  "google-cloud": [
    { id: "gcp-associate", nome: "Google Associate Cloud Engineer", descricao: "Simulado para Google Cloud Associate." },
    { id: "gcp-professional", nome: "Google Professional Cloud Architect", descricao: "Simulado para Google Cloud Professional." },
  ],
  comptia: [
    { id: "comptia-a-plus", nome: "CompTIA A+", descricao: "Simulado para certificação CompTIA A+." },
    { id: "comptia-security-plus", nome: "CompTIA Security+", descricao: "Simulado para certificação CompTIA Security+." },
  ],
  linux: [
    { id: "lpi-essentials", nome: "LPI Linux Essentials", descricao: "Simulado para Linux Essentials." },
    { id: "lpi-1", nome: "LPI LPIC-1", descricao: "Simulado para LPIC-1." },
  ],
  // Concursos Públicos
  pm: [
    { id: "pm-sp", nome: "PM-SP", descricao: "Simulado para Polícia Militar de São Paulo." },
    { id: "pm-mg", nome: "PM-MG", descricao: "Simulado para Polícia Militar de Minas Gerais." },
  ],
  pf: [
    { id: "pf-agente", nome: "Polícia Federal - Agente", descricao: "Simulado para Agente da Polícia Federal." },
    { id: "pf-escrivao", nome: "Polícia Federal - Escrivão", descricao: "Simulado para Escrivão da PF." },
  ],
  tribunais: [
    { id: "tj-sp", nome: "Tribunal de Justiça de São Paulo (TJ-SP)", descricao: "Simulado para concursos do TJ-SP." },
    { id: "trf3", nome: "Tribunal Regional Federal da 3ª Região (TRF-3)", descricao: "Simulado para concursos do TRF-3." },
  ],
  inss: [
    { id: "inss-tecnico", nome: "INSS Técnico do Seguro Social", descricao: "Simulado para Técnico do INSS." },
    { id: "inss-analista", nome: "INSS Analista do Seguro Social", descricao: "Simulado para Analista do INSS." },
  ],
  bancos: [
    { id: "bb", nome: "Banco do Brasil - Escriturário", descricao: "Simulado para Escriturário do Banco do Brasil." },
    { id: "caixa", nome: "Caixa Econômica Federal - Técnico Bancário", descricao: "Simulado para Técnico Bancário da Caixa." },
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
    { id: "matematica-basica", nome: "Matemática Básica", descricao: "Simulado de matemática básica para ensino fundamental e médio." },
    { id: "matematica-avancada", nome: "Matemática Avançada", descricao: "Simulado de matemática avançada para vestibulares." },
  ],
  portugues: [
    { id: "portugues-basico", nome: "Português Básico", descricao: "Simulado de português básico para ensino fundamental e médio." },
    { id: "portugues-avancado", nome: "Português Avançado", descricao: "Simulado de português avançado para vestibulares." },
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
    { id: "ciencias-naturais", nome: "Ciências Naturais", descricao: "Simulado de ciências naturais para ensino fundamental e médio." },
    { id: "ciencias-biologicas", nome: "Ciências Biológicas", descricao: "Simulado de ciências biológicas para vestibulares." },
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
