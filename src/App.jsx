import React from 'react';

import Header from './components/Header';
import Experience from './components/Experience';
import NavBottom from './components/NavBottom';
import Repositories from './components/Repositories';

function App() {
  return (
    <div className="App">
      <Header />
      <Repositories />
      <Experience />
      <NavBottom />
    </div>
  );
}

export default App;
