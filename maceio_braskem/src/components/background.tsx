import { CSSProperties } from "react";
import Bg from "../assets/fundo.jpg";

const Background = () => {
  const backgroundStyle: CSSProperties = {
    position: "absolute", // Fixa o background no topo
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", // Ocupa apenas a altura da tela inicial
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover", // Cobre toda a área sem distorcer a imagem
    backgroundPosition: "center",
    zIndex: 0, // Z-index menor que o das camadas
  };

  return <div style={backgroundStyle}></div>;
};

export default Background;