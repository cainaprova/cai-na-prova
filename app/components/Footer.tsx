export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">Plataforma de simulados educacionais</p>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition">Sobre</a>
            <a href="#" className="hover:text-blue-400 transition">Termos de uso</a>
            <a href="#" className="hover:text-blue-400 transition">Política de privacidade</a>
            <a href="#" className="hover:text-blue-400 transition">Contato</a>
          </nav>
        </div>
        <div className="text-center bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Espaço reservado para anúncio</p>
        </div>
      </div>
    </footer>
  );
}