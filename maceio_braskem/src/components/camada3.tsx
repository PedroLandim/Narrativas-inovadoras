import React from "react";
import { CSSProperties } from "react";

interface Camada3Props {
  scrollPosition: number;
}

const Camada3: React.FC<Camada3Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B4513", // Cor base para arenitos/folhelhos
    color: "white",
    opacity: scrollPosition > 400 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    backgroundImage: `
      linear-gradient(to bottom, #A0522D, #654321), /* Gradiente de tons de arenito e folhelho */
      url('https://www.transparenttextures.com/patterns/asfalt-dark.png') /* Textura de grãos */
    `,
    backgroundBlendMode: "multiply", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #8B4513", // Borda superior para simular uma camada
    borderBottom: "10px solid #654321", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Camada 3: Arenitos/Folhelhos</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
       
      </p>
    </div>
  );
};

export default Camada3;