import React, { useState } from 'react';
import Headers from './components/Headers.jsx';
import HomePage from './components/HomePage.jsx';
import Projet from './components/Projet.jsx';


import { StyledApp } from "./styles/App.styles.jsx";

function App() {
  const [page, setPage] = useState("HomePage")

  return (
    <StyledApp>
      <Headers onClick={setPage} />

      {page === "HomePage" && <HomePage />}
      {page === "projet" && <Projet />}

    </StyledApp>
  );
}

export default App;