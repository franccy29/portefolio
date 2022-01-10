import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { StyledHeaders } from "../styles/Headers.styles.jsx";

function Headers(props) {
  const { onClick } = props;
  const [hoverComponent, setHoverComponent] = useState(null);
  const total = useRef();
  const nom = useRef();
  const blog = useRef();
  const contact = useRef();


  const findState = (args) => {
    switch (args) {
      case "nom":
        return nom;
      case "blog":
        return blog;
      case "contact":
        return contact;
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
      gsap.to(target.current, { borderBottom: "1px solid white" });
    } else {
      gsap.to(nom.current, { borderRadius: "0%", border: "0px solid white" });
      gsap.to(blog.current, { borderRadius: "0%", border: "0px solid white" });
      gsap.to(contact.current, { borderRadius: "0%", border: "0px solid white" });
    }
  }, [hoverComponent])


  return (
    <StyledHeaders ref={total} >
      <span
        ref={nom}
        className={"nom"}
        onMouseEnter={() => setHoverComponent("nom")}
        onMouseLeave={() => setHoverComponent(null)}
        onClick={() => onClick("HomePage")}
      >
        François Martineau
      </span>

      <div className={"item"} >
        <span
          ref={blog}
          onMouseEnter={() => setHoverComponent("blog")}
          onMouseLeave={() => setHoverComponent(null)}
          onClick={() => onClick("blog")}
        >
          Blog
        </span>
        <span
          ref={contact}
          onMouseEnter={() => setHoverComponent("contact")}
          onMouseLeave={() => setHoverComponent(null)}
          onClick={() => onClick("contact")}
        >
          Me contacter
        </span>
      </div>

    </StyledHeaders>
  );
}

  export default Headers;