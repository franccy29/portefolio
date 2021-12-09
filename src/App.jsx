import React from 'react';
import Headers from './components/Headers.jsx';
import HomePage from './components/HomePage.jsx';

import { StyledApp } from "./styles/App.styles.jsx";

function App() {

  return (
    <StyledApp>
      <Headers />
      <HomePage />
    </StyledApp>
  );
}

export default App;