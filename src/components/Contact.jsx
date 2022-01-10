import React from 'react';
import linkedIn from "../image/linkedin.jpg";
import resume from "../image/resume.png";

import { StyledContact } from "../styles/Contact.styles.jsx";

function Contact() {

  return (
    <StyledContact         
      className={"aboutSection"}
    >
      <h2>Merci de vouloir travailler avec moi!</h2>
      <h3>Pour me contacter</h3>
      <h4>voici mes coordonées:</h4>
      <p>E-mail: francois.martineau97@gmail.com</p>
      <p>git hub</p>
      <a href="https://www.linkedin.com/in/francois-martineau97/" rel="noreferrer" target="_blank" ><img src={linkedIn} alt="linked in" height="200px" width="200px" /></a>
      <a href="https://resume.creddle.io/resume/992ulo9z2bs" rel="noreferrer" target="_blank" ><img src={resume} alt="resumer" height="200px" width="200px" /></a>
    </StyledContact>
  );
}

export default Contact;