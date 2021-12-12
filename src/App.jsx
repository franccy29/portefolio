import React, { useState } from 'react';
import Headers from './components/Headers.jsx';
import HomePage from './components/HomePage.jsx';
import Projet from './components/Projet.jsx';
import Travail from './components/Travail.jsx';


import { StyledApp } from "./styles/App.styles.jsx";

function App() {
  const [page, setPage] = useState("HomePage")
  console.log(page);
  return (
    <StyledApp>
      <Headers onClick={setPage} />

      {page === "HomePage" && <HomePage />}
      {page === "projet" && <Projet />}
      {page === "travail" && <Travail />}

    </StyledApp>
  );
}

export default App;