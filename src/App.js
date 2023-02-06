import React, { useState } from "react"

import Container from 'react-bootstrap/Container';

import './App.css';
import E3DSReactComponent from './components/E3DSReactComponent';

const App = () => {

  const [pos, setPos] = useState("");

  const handleChange = e => {
    setPos(e.target.value);
  }

  const movePosition = () => {
    window?.call2EmitUIInteraction({
      Teleport: pos
    });
  }

  return <>
    <Container className="p-3">
      <h1 className="header">Welcome To E3DS Stream UI KIT Demo</h1>
      <h2>
        <button onClick={movePosition}>Move position to</button>
        <input
          type="text"
          value={pos}
          onChange={handleChange}
        />
        <E3DSReactComponent/>
      </h2>

    </Container>
  </>

}

export default App;
