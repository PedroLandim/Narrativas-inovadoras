import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Braskem em Maceió</h1>
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/impactos">Impactos</Link></li>
          <li><Link to="/sociedade">Sociedade</Link></li>
          <li><Link to="/cronologia">Cronologia</Link></li>
          <li><Link to="/acoes">Ações</Link></li>
        </ul>
      </div>
    </nav>
  );
}
