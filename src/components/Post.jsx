import React from 'react';



import { StyledPost } from "../styles/Post.styles.jsx";

function Post(props) {
  const { id, title, onClick } = props;

  return (
    <StyledPost onClick={() => onClick(id)} >
        <p>{title}</p>
    </StyledPost>
  );
}

export default Post;