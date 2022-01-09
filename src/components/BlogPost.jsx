import React from 'react';
import blogData from "../blog/test.json";

import { StyledBlogPost } from "../styles/BlogPost.styles.jsx";


function BlogPost(props) {
  const { id } = props;

  const article = blogData[id];
  const output = [];

  for (const key in article) {
    if (key === "id") {
      
    } else if (key === "title") {
      output.push(<h2>{article[key]}</h2>);
    } else if (key.substring(0, 3) === "img") {
      output.push(<img src={article[key]} alt="blogImage" />);
    } else {
      output.push(<p>{article[key]}</p>);
    }
  }

  return (
    <StyledBlogPost>

    {output}

    </StyledBlogPost>
  );
}

export default BlogPost;