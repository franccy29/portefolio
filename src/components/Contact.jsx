import React from 'react';
import linkedIn from "../image/linkedin.jpg";
import resume from "../image/resume.png";
import gitHub from "../image/github.png";


import { StyledContact } from "../styles/Contact.styles.jsx";

function Contact() {

  return (
    <StyledContact         
      className={"aboutSection"}
    >
      <h2>Merci de vouloir travailler avec moi!</h2>
      <h3>Pour me contacter</h3>
      <h4>Voici mes coordonnées:</h4>
      <p>E-mail: francois.martineau97@gmail.com</p>
      <a href="https://github.com/franccy29" rel="noreferrer" target="_blank" ><img src={gitHub} alt="linked in" height="200px" width="200px" /></a>
      <a href="https://www.linkedin.com/in/francois-martineau97/" rel="noreferrer" target="_blank" ><img src={linkedIn} alt="linked in" height="200px" width="200px" /></a>
      <a href="https://resume.io/r/q8BVthm4X" rel="noreferrer" target="_blank" ><img src={resume} alt="resumer" height="200px" width="200px" /></a>
    </StyledContact>
  );
}

export default Contact;