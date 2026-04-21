import { useState, useEffect } from "react";
import videoFondo from "./assets/video.mp4";
import "./App.scss";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoFondo} type="video/mp4" />
        </video>
        <div className="overlay"></div> 
      </div>

      <header className={`hero ${visible ? 'is-visible' : ''}`}>
        <div className="hero-content">
          <h1>Enyp<span>HUB</span></h1>
          <p>Innovación, Financiación & Impacto</p>
          <div className="descubre">Consultoría Estratégica</div>
          <button className="cta-button">Descubre nuestro impacto</button>
        </div>
      </header>
    </div>
  );
}

export default App;
      
