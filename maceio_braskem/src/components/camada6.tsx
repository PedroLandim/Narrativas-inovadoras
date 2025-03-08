import React from "react";
import { CSSProperties } from "react";

interface Camada6Props {
  scrollPosition: number;
}

const Camada6: React.FC<Camada6Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0FFFF", // Cor base para salmouras (água salgada)
    color: "white",
    opacity: scrollPosition > 1200 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    backgroundImage: `
      linear-gradient(to bottom, #E0FFFF, #AFEEEE), /* Gradiente de tons de água salgada */
      url('https://www.transparenttextures.com/patterns/crissxcross.png') /* Textura de cristais de sal */
    `,
    backgroundBlendMode: "overlay", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #AFEEEE", // Borda superior para simular uma camada
    borderBottom: "10px solid #87CEEB", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "#000080" }}>Camada 6: Poço de Sal com Salmouras</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#000080" }}>
      </p>
    </div>
  );
};

export default Camada6;