import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';

function App() {
  const [mode, setMode] = useState(false);

  function changeMode() {
    setMode((prev) => !prev);
  }

  console.log(mode);
  return (
    <div className={`mainCOntainer  ${!mode ? 'dark' : ''}`}>
      <Header changeMode={changeMode} mode={mode} />
      <MainSection mode={mode} />
    </div>
  );
}

export default App;
