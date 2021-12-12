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
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </p>
      </div>
      <div className={"scheduler"} >
        <p ref={gauche2} >
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </p>
        <img src={schedulerImage} alt="calala" ref={droite2} />
      </div>
      <div className={"tweeter"} >
        <img src={tweeterImage} alt="calala" ref={gauche3}  />
        <p ref={droite3} >
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </p>
      </div>
      <div className={"tinny"} >
        <p ref={gauche4}  >
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </p>
        <img src={tinnyImage} alt="calala" ref={droite4} />
      </div>
    </StyledProjet>
  );
}

  export default Projet;