import React from 'react';
import blogData from "../blog/test.json";
import Post from "./Post.jsx";




import { StyledBlog } from "../styles/Blog.styles.jsx";


function Blog(props) {
  const { onClick } = props;
  const blogPost = [];

  blogData.forEach((data) => {
    blogPost.push(<Post key={data.id} id={data.id} title={data.title} onClick={onClick} />)
  });

  return (
    <StyledBlog>

    {blogPost}

    </StyledBlog>
  );
}

export default Blog;