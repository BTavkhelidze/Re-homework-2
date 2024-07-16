import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';

function App() {
  return (
    <div className='mainCOntainer'>
      <Header />
      <MainSection />
    </div>
  );
}

export default App;
