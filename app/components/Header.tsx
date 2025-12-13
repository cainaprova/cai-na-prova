export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cai Na Prova</h1>
        <nav>
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/enem" className="mr-4 hover:underline">ENEM</a>
          <a href="/detran" className="mr-4 hover:underline">DETRAN</a>
          <a href="/etec" className="hover:underline">ETEC</a>
        </nav>
      </div>
    </header>
  );
}