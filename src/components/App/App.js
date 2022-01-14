import React, { useState } from 'react';

import './App.css';


//components
import Navbar from '../Navbar/Navbar'
import MainContainer from '../MainContainer/MainContainer'
import HomePage from '../HomePage/HomePage'

function App() {

  const [view, setView] = useState("paintings")

  return (
    <>
      <Navbar setView={setView}/>
      { view === "home" ? <HomePage /> : null}
      { view === "paintings" ? <MainContainer /> : null }
      
    </>
  );
}

export default App;
