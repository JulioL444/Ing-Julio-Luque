import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <main id="main">
        <div className="inner">
          <h1 id="text01">¡Hola, soy [Tu Nombre]!</h1>
          <p className="style4">
            Soy un desarrollador apasionado por la tecnología. Aquí puedes
            descargar mi CV y acceder a mis redes sociales.
          </p>
          <ul className="buttons style1">
            <li>
              <a href="/tu-cv.pdf" target="_blank" rel="noopener noreferrer">
                Ver mi CV
              </a>
            </li>
          </ul>
          <ul className="icons style1">
            <li>
              <a
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/tu-numero"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
