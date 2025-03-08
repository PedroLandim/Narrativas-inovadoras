import React from "react";
import { CSSProperties } from "react";

interface Camada1Props {
  scrollPosition: number;
}

const Camada1: React.FC<Camada1Props> = ({ scrollPosition }) => {
  const camadaStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B4513", // Cor base da argila
    color: "white",
    opacity: scrollPosition > 100 ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    marginTop: "900px", // Espaço acima da Camada1
    backgroundImage: `
      linear-gradient(to bottom, #D2B48C, #8B4513), /* Gradiente de areia para argila */
      url('https://www.transparenttextures.com/patterns/asfalt-dark.png') /* Textura de areia */
    `,
    backgroundBlendMode: "multiply", // Combina o gradiente com a textura
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Sombra para profundidade
    borderTop: "10px solid #A0522D", // Borda superior para simular uma camada
    borderBottom: "10px solid #654321", // Borda inferior para simular uma camada
  };

  return (
    <div style={camadaStyle}>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Camada 1: Areia/Argilas</h2>
      <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
        
      </p>
    </div>
  );
};

export default Camada1;