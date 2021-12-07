import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

function App() {

  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { x: 100 });
  });

  return (
    <div className="App">
      <p ref={boxRef} >
        test
      </p>
    </div>
  );
}

export default App;
