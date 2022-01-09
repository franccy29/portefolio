import React from 'react';



import { StyledPost } from "../styles/Post.styles.jsx";

function Post(props) {
  const { text, titre } = props;

  return (
    <StyledPost>
        <h2>{titre}</h2>
        <p>{text}</p>
    </StyledPost>
  );
}

export default Post;