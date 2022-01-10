import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import footballImage from "../image/football.png";
import schedulerImage from "../image/scheduler.png";
import tweeterImage from "../image/tweeter.png";
import tinnyImage from "../image/tinny.png";
import react from "../image/react.png";
import JS from "../image/JS.png";
import nodejs from "../image/nodejs.png";
import styledComponent from "../image/styledComponent.png";
import jest from "../image/jest.jpg";
import jquery from "../image/jquery.png";
import jwt from "../image/jwt.png";
import materialui from "../image/materialui.png";
import postgresql from "../image/postgresql.png";
import storybook from "../image/storybook.png";




import arrowDown from "../image/arrowDown.svg";
import { StyledHomePage } from "../styles/HomePage.styles.jsx";


function HomePage() {


  const name = useRef();
  const profession = useRef();
  const intro = useRef();
  const images = useRef();
  const reactImage = useRef();
  const JsImage = useRef();
  const nodeJsImage = useRef();
  const arrow = useRef();
  const styledComponentImage = useRef();
  const jestImage = useRef();
  const jqueryImage = useRef();
  const jwtImage = useRef();
  const materialuiImage = useRef();
  const postgresqlImage = useRef();
  const storybookImage = useRef();


  useEffect(() => {
    gsap.to(name.current, { duration: 2.5, x: 100 });
    gsap.to(profession.current, { duration: 2.5, x: 100 });
    gsap.to(intro.current, { duration: 2.5, x: 100 });
    gsap.to(images.current, { duration: 2.5, x: 100 });
    gsap.to(reactImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(JsImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(nodeJsImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(styledComponentImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(jestImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(jqueryImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(jwtImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(materialuiImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(postgresqlImage.current, { borderRadius: "20%", border: "5px solid #545e75" });
    gsap.to(storybookImage.current, { borderRadius: "20%", border: "5px solid #545e75" });

    gsap.to(arrow.current, { duration: 1, y: 20, yoyo: true, repeat: -1, ease: "sine.inOut", autoRound: false });
  });


  return (
    <StyledHomePage>

      <div className={"intro"} ref={intro} >
        Bienvenue! Je suis un developpeur web full-stack dans la région de Montréal, QC.
      </div>

      <p className={"resume"} >
        Aillant travailler en restauration durant 8 ans, je considère avoir beaucoup appris sur les habitudes de la clientèle et comment bien l'approcher.
        Ce domaine est tres souvent dans un environnement sous pression ou nous devons travailler en équipe vers un but commun. Depuis mon tout jeune âge j'ai
        été attirer vers le developpement informatique, j'ai donc décider tenter ma chance dans un Bootcamp avec LightHouse Labs. En plus, j'ai suivis certains cours de
        CÉGEP dans ce domaine. Je suis donc acctuellement a la recherche d'un emplois qui utilise React ou autre technologie de la sorte.
      </p>

      <div className={"images"} ref={images} >
        <img src={react} alt="React" ref={reactImage} />
        <img src={JS} alt="Java Script" ref={JsImage} />
        <img src={nodejs} alt="nodeJS" ref={nodeJsImage} />
        <img src={styledComponent} alt="styledComponent" ref={styledComponentImage} />
        <img src={jest} alt="React" ref={jestImage} />
        <img src={jquery} alt="Java Script" ref={jqueryImage} />
        <img src={jwt} alt="nodeJS" ref={jwtImage} />
        <img src={materialui} alt="styledComponent" ref={materialuiImage} />
        <img src={postgresql} alt="React" ref={postgresqlImage} />
        <img src={storybook} alt="Java Script" ref={storybookImage} />
      </div>

        <div className={"top"}>
          <h1>Mes projets</h1>
          <img src={arrowDown} alt="arrowDown" ref={arrow} />
        </div>

      <div className={"projet"}>

        <div className={"border"}>
        <h2>Fantasy Hoops</h2>
        <div className={"football"} >
          <img src={footballImage} alt="calala" />
          <p>
            Fantasy Hoops est une application qui permet aux utilisateurs de consulter rapidement et graphiquement plusieurs statistiques
            plus ou moin avancer sur les performances de leurs équipes de fantasy basketball. L'application est fait d'une façon à être
            complémentaire pour rendre les décisions en question d'alignement plus facile à chaque semaine.
            <br/>
            <br/>Tech Stack: React, JWT, Styled-component, Victory, Material UI, Knex, ExpressJs, Postgresql.
          </p>
        </div>
        </div>

        <div className={"border"}>
        
        <h2>Scheduler</h2>
        <div className={"scheduler"} >
          <p>
            Ce projet est un simple planificateur, un projet future sera d'ajouter une gestion d'utilisateur et de rendre l'application utilisable
            pour plusieurs autres situations que seulement ce qu'elle nous procure en ce moment. Ce projet vient du bootcamp LightHouse Labs.
            <br/>
            <br/>Tech Stack: React, Axios, Storybook, Jest, Cypress, Babel, Sass.
          </p>
          <img src={schedulerImage} alt="calala" />
        </div>
        </div>

        <div className={"border"}>

        <h2>Tweeter</h2>
        <div className={"tweeter"} >
          <img src={tweeterImage} alt="calala" />
          <p>
            Tout simplement un clone de twitter fait en application web monopage(SPA).
            <br/>
            <br/>Tech Stack: jQuery, AJAX, Node, ExpressJs, MongoDB.
          </p>
        </div>
        </div>

        <div className={"border"}>

        <h2>Tinny URL</h2>
        <div className={"tinny"} >
          <p>
            Un clone de bit.ly, qui gère et génère des liens URL plus court.
            <br/>
            <br/>Tech Stack: Chai, Mocha, Cookie-session, Ejs, ExpressJs.
          </p>
          <img src={tinnyImage} alt="calala" />
        </div>
        </div>

      </div>

    </StyledHomePage>
  );
}

  export default HomePage;