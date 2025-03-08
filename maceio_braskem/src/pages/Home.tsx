import { useState, useEffect } from "react";

import Mineradora from "../components/Mineradora";
import Background from "../components/background";
import Camada1 from "../components/camada1";
import Camada2 from "../components/camada2";
import Camada3 from "../components/camada3";
import Camada4 from "../components/camada4";
import Camada5 from "../components/camada5";
import Camada6 from "../components/camada6";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Background />
      <Mineradora scrollPosition={scrollPosition} pageHeight={document.documentElement.scrollHeight} />
      <Camada1 scrollPosition={scrollPosition} />
      <Camada2 scrollPosition={scrollPosition} />
      <Camada3 scrollPosition={scrollPosition} />
      <Camada4 scrollPosition={scrollPosition} />
      <Camada5 scrollPosition={scrollPosition} />
      <Camada6 scrollPosition={scrollPosition} />
    </div>
  );
}