import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <Navbar />
      <header>
        <h1>O impacto da Braskem em Maceió</h1>
      </header>
      <section>
        <div className="alert-box">
          <p>🚨 Emergência ambiental! A cidade está afundando devido às atividades da Braskem.</p>
        </div>
        <h2>O que está acontecendo?</h2>
        <p>
          A mineração irresponsável de sal-gema pela Braskem está causando o colapso do solo em vários bairros de Maceió, 
          forçando milhares de famílias a deixarem suas casas.
        </p>

        {showMore && (
          <div className="extra-content">
            <h3>⚠️ Áreas afetadas</h3>
            <p>
              Os bairros Pinheiro, Mutange, Bebedouro e Bom Parto estão entre os mais impactados, com rachaduras e afundamentos visíveis.
            </p>
            <h3>📉 Impacto social e econômico</h3>
            <p>
              Milhares de moradores foram evacuados, levando a uma crise habitacional e econômica, além de impactos psicológicos devastadores.
            </p>
            <h3>🚧 O que está sendo feito?</h3>
            <p>
              A empresa foi responsabilizada e obrigada a indenizar os moradores, mas muitos ainda aguardam justiça.
            </p>
          </div>
        )}

        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ver menos" : "Saiba mais"}
        </button>
      </section>
    </div>
  );
}
