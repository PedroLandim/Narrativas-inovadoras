import React from "react";
import { CSSProperties } from "react";

interface Camada2Props {
  scrollPosition: number;
}

const Camada2: React.FC<Camada2Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D2B48C", // Cor base para calcarenitos
    color: "white",
    opacity: scrollPosition > 200 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    backgroundImage: `
      linear-gradient(to bottom, #F4A460, #D2B48C), /* Gradiente de tons de calcário */
      url('https://www.transparenttextures.com/patterns/rough-cloth.png') /* Textura de grãos */
    `,
    backgroundBlendMode: "multiply", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #CD853F", // Borda superior para simular uma camada
    borderBottom: "10px solid #8B4513", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Camada 2: Calcarenitos</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
        
      </p>
    </div>
  );
};

export default Camada2;