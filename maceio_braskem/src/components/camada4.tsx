import React from "react";
import { CSSProperties } from "react";

interface Camada4Props {
  scrollPosition: number;
}

const Camada4: React.FC<Camada4Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#696969", // Cor base para conglomerados
    color: "white",
    opacity: scrollPosition > 800 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    backgroundImage: `
      linear-gradient(to bottom, #808080, #696969), /* Gradiente de tons de conglomerado */
      url('https://www.transparenttextures.com/patterns/stone-wall.png') /* Textura de seixos */
    `,
    backgroundBlendMode: "multiply", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #808080", // Borda superior para simular uma camada
    borderBottom: "10px solid #556B2F", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Camada 4: Conglomerados</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
       
      </p>
    </div>
  );
};

export default Camada4;