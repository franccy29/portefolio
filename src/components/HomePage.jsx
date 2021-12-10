import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { StyledHomePage } from "../styles/HomePage.styles.jsx";
import react from "../image/react.png";
import GSAP from "../image/GSAP.png";
import JS from "../image/JS.png";
import nodejs from "../image/nodejs.png";

function HomePage() {
  const [show, setShow] = useState(null);


  const name = useRef();
  const profession = useRef();
  const intro = useRef();
  const images = useRef();
  const reactImage = useRef();
  const JsImage = useRef();
  const GSAPImage = useRef();
  const nodeJsImage = useRef();
  const resume = useRef();


  useEffect(() => {
    gsap.to(name.current, { duration: 2.5, x: 100 });
    gsap.to(profession.current, { duration: 2.5, x: 100 });
    gsap.to(intro.current, { duration: 2.5, x: 100 });
    gsap.to(images.current, { duration: 2.5, x: 100 });
    gsap.to(reactImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(JsImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(GSAPImage.current, { borderRadius: "20%", border: "5px solid white" });
    gsap.to(nodeJsImage.current, { borderRadius: "20%", border: "5px solid white" });
    show === "montre" ? gsap.to(resume.current, { duration: 2, y: -210 }) : (show === "pasMontre" ? gsap.to(resume.current, { duration: 2, y: -100 }) : gsap.to(resume.current, { duration: 1, y: -100 }));
  });


  return (
    <StyledHomePage>
      <div className={"nameTag"}>
        <span className={"nom"} ref={name} >François Martineau</span>
        <span className={"profession"} ref={profession} >Developpeur web</span>
      </div>
      <div className={"intro"} ref={intro} >
        Bienvenue! Je suis un developpeur web full-stack dans la région de Montréal, QC.
      </div>
      <div className={"images"} ref={images} >
        <img src={react} alt="React" ref={reactImage} />
        <img src={JS} alt="Java Script" ref={JsImage} />
        <img src={nodejs} alt="nodeJS" ref={nodeJsImage} />
        <img src={GSAP} alt="GSAP" ref={GSAPImage} />
      </div>
      <div
        className={"aboutSection"}
        ref={resume}
        onMouseEnter={() => setShow("montre")}
        onMouseLeave={() => setShow("pasMontre")}
      >
        <h2>Résumer</h2>
        <p>Aillant travailler en restauration durant 8 ans, je considère avoir beaucoup appris sur les habitudes de la clientèle et comment bien l'approcher. Ce domaine est tres souvent dans un environnement sous pression ou nous devons travailler en équipe vers un but commun. Depuis mon tout jeune âge j'ai été attirer vers le developpement informatique, j'ai donc décider tenter ma chance dans un Bootcamp avec LightHouse Labs. En plus, j'ai suivis certains cours de CÉGEP dans ce domaine. Je suis donc acctuellement a la recherche d'un emplois qui utilise React ou autre technologie de la sorte.</p>
      </div>
    </StyledHomePage>
  );
}

  export default HomePage;