import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import footballImage from "../image/football.png";
import schedulerImage from "../image/scheduler.png";
import tweeterImage from "../image/tweeter.png";
import tinnyImage from "../image/tinny.png";


import { StyledProjet } from "../styles/Projet.styles.jsx";

function Projet() {


  return (
    <StyledProjet>
      <div className={"football"} >
        <img src={footballImage} alt="calala" />
        <span>
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </span>
      </div>
      <div className={"scheduler"} >
        <span>
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </span>
        <img src={schedulerImage} alt="calala" />
      </div>
      <div className={"tweeter"} >
        <img src={tweeterImage} alt="calala" />
        <span>
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </span>
      </div>
      <div className={"tinny"} >
        <span>
          Un gros resumer de cette appli la, je veux parler autant du stack que de lutilité et de comment je lai fait.
        </span>
        <img src={tinnyImage} alt="calala" />
      </div>
    </StyledProjet>
  );
}

  export default Projet;