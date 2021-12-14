import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { StyledHeaders } from "../styles/Headers.styles.jsx";

function Headers(props) {
  const { onClick } = props;
  const [hoverComponent, setHoverComponent] = useState(null);
  const total = useRef();
  const titre = useRef();
  const projet = useRef();

  const findState = (args) => {
    switch (args) {
      case "titre":
        return titre;
      case "projet":
        return projet;
      default:
        return null;
    }
  };

  useEffect(() => {
    gsap.to(total.current, { duration: 2.5, y: 50 });
  });

  useEffect(() => {
    const target = findState(hoverComponent);
    if (hoverComponent) {
      gsap.to(target.current, { borderRadius: "60%", borderBottom: "2px solid white" });
    } else {
      gsap.to(titre.current, { borderRadius: "0%", border: "0px solid white" });
      gsap.to(projet.current, { borderRadius: "0%", border: "0px solid white" });
    }
  }, [hoverComponent])


  return (
    <StyledHeaders ref={total} >
      <span
        ref={titre}
        className={"titre"}
        onMouseEnter={() => setHoverComponent("titre")}
        onMouseLeave={() => setHoverComponent(null)}
        onClick={() => onClick("HomePage")}
      >
        Portfolio
      </span>

      <div className={"item"} >
        <span
          ref={projet}
          onMouseEnter={() => setHoverComponent("projet")}
          onMouseLeave={() => setHoverComponent(null)}
          onClick={() => onClick("projet")}
        >
          Mes projets
        </span>
      </div>

    </StyledHeaders>
  );
}

  export default Headers;