import React, { useState } from 'react';
import Headers from './components/Headers.jsx';
import HomePage from './components/HomePage.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';


import { StyledApp } from "./styles/App.styles.jsx";

function App() {
  const [page, setPage] = useState("HomePage")

  return (
    <StyledApp>
      <Headers onClick={setPage} />

      {page === "HomePage" && <HomePage />}
      {page === "contact" && <Contact />}
      {page === "blog" && <Blog />}

    </StyledApp>
  );
}

export default App;