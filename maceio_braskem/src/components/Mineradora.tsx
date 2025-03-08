import React, { CSSProperties } from "react";
import elevatorImage from "../assets/elevator.png";

interface MineradoraProps {
  scrollPosition: number;
  pageHeight: number; // Altura total da página
}

const Mineradora: React.FC<MineradoraProps> = ({ scrollPosition, pageHeight }) => {
  const alturaInicial = 750; // Posição inicial do elevador
  const alturaAtivacao = 500; // Scroll em que começa a descer
  const alturaFinal = pageHeight - 100; // Altura final da página (com margem)

  // Calcula o progresso normalizado (de 0 a 1) com base no scroll
  const progresso = Math.max(0, Math.min(1, (scrollPosition - alturaAtivacao) / (pageHeight - alturaAtivacao)));

  // Interpola a posição entre a alturaInicial e alturaFinal
  const top = alturaInicial + progresso * (alturaFinal - alturaInicial);

  const mineradoraStyle: CSSProperties = {
    position: "absolute",
    top: `${top}px`,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  };

  return (
    <div style={mineradoraStyle}>
      <img src={elevatorImage} alt="Mineradora" style={{ width: "50px", height: "70px" }} />
    </div>
  );
};

export default Mineradora;
