import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";


import { StyledContact } from "../styles/Contact.styles.jsx";

function Contact() {
  const [show, setShow] = useState(null);

  const resume = useRef();

  useEffect(() => {
    show === "montre" ? gsap.to(resume.current, { duration: 2, y: -235 }) :
      (show === "pasMontre" ? gsap.to(resume.current, { duration: 2, y: -100 }) :
        gsap.to(resume.current, { duration: 1, y: -100 }));
  });

  return (
    <StyledContact         
      className={"aboutSection"}
      ref={resume}
      onMouseEnter={() => setShow("montre")}
      onMouseLeave={() => setShow("pasMontre")}
    >
      <h2>Pour me contacter</h2>
      <h3>Merci de vouloir travailler avec moi!</h3>
      <h4>voici mes coordonées:</h4>
      <p>E-mail: francois.martineau97@gmail.com</p>
      <a href="https://www.linkedin.com/in/francois-martineau97/">Mon Linked in</a>
      <a href="https://resume.creddle.io/resume/992ulo9z2bs">Mon résumer</a> 
    </StyledContact>
  );
}

export default Contact;