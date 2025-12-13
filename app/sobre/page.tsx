export default function Sobre() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Página Sobre
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Esta é uma nova página criada no Next.js. Você pode acessar em /sobre
        </p>
        <a href="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Voltar para Home
        </a>
      </main>
    </div>
  );
}