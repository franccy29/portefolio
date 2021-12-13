import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import footballImage from "../image/football.png";
import schedulerImage from "../image/scheduler.png";
import tweeterImage from "../image/tweeter.png";
import tinnyImage from "../image/tinny.png";


import { StyledProjet } from "../styles/Projet.styles.jsx";

function Projet() {

  const droite1 = useRef();
  const droite2 = useRef();
  const droite3 = useRef();
  const droite4 = useRef();
  const gauche1 = useRef();
  const gauche2 = useRef();
  const gauche3 = useRef();
  const gauche4 = useRef();


  useEffect(() => {
    const gauche = [gauche1.current, gauche2.current, gauche3.current, gauche4.current];
    const droite = [droite1.current, droite2.current, droite3.current, droite4.current];
    gsap.to(gauche, { duration: 2.5, x: 100 });
    gsap.to(droite, { duration: 2.5, x: -100 });
  });



  return (
    <StyledProjet>
      <h3>Mes projets</h3>
      <div className={"football"} >
        <img src={footballImage} alt="calala" ref={gauche1} />
        <p ref={droite1} >
          Fantasy Hoops est une application qui permet aux utilisateurs de consulter rapidement et graphiquement plusieurs statistiques
          plus ou moin avancer sur les performances de leurs équipes de fantasy basketball. L'application est fait d'une façon à être
          complémentaire pour rendre les décisions en question d'alignement plus facile à chaque semaine.
          <br/>Tech Stack: React, JWT, Styled-component, Victory, Material UI, Knex, ExpressJs, Postgresql.
          <br/>(Ce projet est en cours, le frontend se fait remodeler en utilisant react-router et GSAP. Le backend se fait réécrire en .net core)
        </p>
      </div>
      <div className={"scheduler"} >
        <p ref={gauche2} >
          This is a project based on the Lighthouse Labs bootcamp. It's my first time using React, StoryBook, Jest, Cypress.
          The CSS was given to me, I really liked the way React and Cypress works. The project works fine, there is some improvement possible,
          I will try to update it with some stretch work but this is not a guarantied.

          Ce projet est un simple planificateur, un projet future sera d'ajouter une gestion d'utilisateur et de rendre l'application utilisable
          pour plusieurs autres situations que seulement ce qu'elle nous procure en ce moment. Ce projet vient du bootcamp LightHouse Labs.
          <br/>Tech Stack: React, Axios, Storybook, Jest, Cypress, Babel, Sass.
        </p>
        <img src={schedulerImage} alt="calala" ref={droite2} />
      </div>
      <div className={"tweeter"} >
        <img src={tweeterImage} alt="calala" ref={gauche3}  />
        <p ref={droite3} >
          Tout simplement un clone de twitter fait en application web monopage(SPA).
          <br/>Tech Stack: jQuery, AJAX, Node, ExpressJs, MongoDB.
        </p>
      </div>
      <div className={"tinny"} >
        <p ref={gauche4}  >
          Un clone de bit.ly, qui gère et génère des liens URL plus court.
          <br/>Tech Stack: Chai, Mocha, Cookie-session, Ejs, ExpressJs.

        </p>
        <img src={tinnyImage} alt="calala" ref={droite4} />
      </div>
    </StyledProjet>
  );
}

  export default Projet;