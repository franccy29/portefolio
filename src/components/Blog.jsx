import React from 'react';
import Post from "./Post.jsx";



import { StyledBlog } from "../styles/Blog.styles.jsx";


function Blog() {
  const allPost = [<Post titre={"titreeee"} text={"test"} />, <Post titre={"titdsafsadfreeee"} text={"tfsadfsadest"} />, <Post titre={"fsdfsa"} text={"tasfdfsdaest"} />];
  
  return (
    <StyledBlog>
        {allPost}
    </StyledBlog>
  );
}

export default Blog;