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
      <div className={"football"} >
        <img src={footballImage} alt="calala" ref={gauche1} />
        <p ref={droite1} >
          A helper app that allows users to at-a-glance see rich basketball data/statistics for their fantasy team so that they
          can make more informed and competitive decisions. This app is designed to be a complementary tool for the fantasy basketball
          experience.
          <br/>Tech Stack: React, Styled-component, Victory, Material UI, Knex, ExpressJs, Postgresql.
        </p>
      </div>
      <div className={"scheduler"} >
        <p ref={gauche2} >
          This is a project based on the Lighthouse Labs bootcamp. It's my first time using React, StoryBook, Jest, Cypress.
          The CSS was given to me, I really liked the way React and Cypress works. The project works fine, there is some improvement possible,
          I will try to update it with some stretch work but this is not a guarantied.
          <br/>Tech Stack: React, Axios, Storybook, Jest, Cypress, Babel, Sass.
        </p>
        <img src={schedulerImage} alt="calala" ref={droite2} />
      </div>
      <div className={"tweeter"} >
        <img src={tweeterImage} alt="calala" ref={gauche3}  />
        <p ref={droite3} >
          Tweeter is a simple, single-page Twitter clone.
          <br/>Tech Stack: jQuery, AJAX, Node, ExpressJs, MongoDB.
        </p>
      </div>
      <div className={"tinny"} >
        <p ref={gauche4}  >
          TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).
          <br/>Tech Stack: Chai, Mocha, Cookie-session, Ejs, ExpressJs.

        </p>
        <img src={tinnyImage} alt="calala" ref={droite4} />
      </div>
    </StyledProjet>
  );
}

  export default Projet;