import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { StyledHomePage } from "../styles/HomePage.styles.jsx";
import react from "../image/react.png";
import GSAP from "../image/GSAP.png";
import JS from "../image/JS.png";
import nodejs from "../image/nodejs.png";

function HomePage() {

  const name = useRef();
  const profession = useRef();
  const intro = useRef();
  const images = useRef();
  const reactImage = useRef();
  const JsImage = useRef();
  const GSAPImage = useRef();
  const nodeJsImage = useRef();


  useEffect(() => {
    gsap.to(name.current, { duration: 2.5, x: 100 });
    gsap.to(profession.current, { duration: 2.5, x: 100 });
    gsap.to(intro.current, { duration: 2.5, x: 100 });
    gsap.to(images.current, { duration: 2.5, x: 100 });
    gsap.to(reactImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(JsImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(GSAPImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(nodeJsImage.current, { borderRadius: "20%", border: "5px solid white" });
  });


  return (
    <StyledHomePage>
      <span className={"nom"} ref={name} >François Martineau</span>
      <span className={"profession"} ref={profession} >Developpeur web</span>
      <div className={"intro"} ref={intro} >
        Bienvenue! Je suis un developpeur web full-stack dans la région de Montréal, QC.
      </div>
      <div className={"images"} ref={images} >
        <img src={react} alt="React" ref={reactImage} />
        <img src={JS} alt="Java Script" ref={JsImage} />
        <img src={nodejs} alt="nodeJS" ref={nodeJsImage} />
        <img src={GSAP} alt="GSAP" ref={GSAPImage} />
      </div>
    </StyledHomePage>
  );
}

  export default HomePage;