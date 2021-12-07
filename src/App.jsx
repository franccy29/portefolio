import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { StyledApp } from "./styles/App.styles.jsx";
import react from "./image/react.png";
import GSAP from "./image/GSAP.png";
import JS from "./image/JS.png";
import nodejs from "./image/nodejs.png";

function App() {

  const name = useRef();
  const profession = useRef();
  const intro = useRef();
  const images = useRef();

  useEffect(() => {
    gsap.to(name.current, { duration: 2.5, x: 100 });
    gsap.to(profession.current, { duration: 2.5, x: 100 });
    gsap.to(intro.current, { duration: 2.5, x: 100 });
    gsap.to(images.current, { duration: 2.5, x: 100 });
  });

  return (
    <StyledApp>
      <span className={"nom"} ref={name} >François Martineau</span>
      <span className={"profession"} ref={profession} >Developpeur web</span>
      <div className={"intro"} ref={intro} >
        Bienvenue! Je suis un developpeur web full-stack dans la région de Montréal, QC.
      </div>
      <div className={"images"} ref={images} >
        <img src={react} alt="React" />
        <img src={JS} alt="Java Script" />
        <img src={GSAP} alt="GSAP" />
        <img src={nodejs} alt="nodeJS" />
      </div>
    </StyledApp>
  );
}

export default App;