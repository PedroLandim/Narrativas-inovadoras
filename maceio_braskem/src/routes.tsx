import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impactos from "./pages/impactos";
import Sociedade from "./pages/sociedade";
import Cronologia from "./pages/cronologia";
import Acoes from "./pages/acoes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impactos" element={<Impactos />} />
        <Route path="/sociedade" element={<Sociedade />} />
        <Route path="/cronologia" element={<Cronologia />} />
        <Route path="/acoes" element={<Acoes />} />
      </Routes>
    </Router>
  );
}
