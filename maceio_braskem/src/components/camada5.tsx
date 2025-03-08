import React from "react";
import { CSSProperties } from "react";

interface Camada5Props {
  scrollPosition: number;
}

const Camada5: React.FC<Camada5Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#556B2F", // Cor base para folhelhos
    color: "white",
    opacity: scrollPosition > 1000 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    backgroundImage: `
      linear-gradient(to bottom, #6B8E23, #556B2F), /* Gradiente de tons de folhelho */
      url('https://www.transparenttextures.com/patterns/soft-wallpaper.png') /* Textura de folhelho */
    `,
    backgroundBlendMode: "multiply", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #6B8E23", // Borda superior para simular uma camada
    borderBottom: "10px solid #556B2F", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Camada 5: Folhelhos</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
       
      </p>
    </div>
  );
};

export default Camada5;