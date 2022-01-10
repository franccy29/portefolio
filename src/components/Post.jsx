import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";


import { StyledPost } from "../styles/Post.styles.jsx";

function Post(props) {
  const { id, title, onClick } = props;

  const [hoverComponent, setHoverComponent] = useState(false);

  
  const hover = useRef();



  useEffect(() => {
    if (hoverComponent) {
      gsap.to(hover.current, { backgroundColor: "gray", color: "white" });
    } else {
      gsap.to(hover.current, { backgroundColor: "white", color: "black" });
    }
  }, [hoverComponent])



  return (
    <StyledPost onClick={() => onClick(id)} ref={hover}
    onMouseEnter={() => setHoverComponent(true)}
    onMouseLeave={() => setHoverComponent(false)}
    >
        <p>{title}</p>
    </StyledPost>
  );
}

export default Post;