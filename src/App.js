import React from 'react';
import { useTransition, animated } from 'react-spring';
import './App.css';
import Scroll from './components/scroll';

//const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ,"L" ,"M" ,"N" ,"O" ,"P", "Q", "R", "S", "T", "U", "V", "W" ,"X", "Y", "Z"]

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo-mundiale.svg" className="App-logo" alt="logo" /> 
        <Scroll></Scroll>
        <div className="MundCatalog">
        </div> 
      </header>
      
    </div>
  );
}

export default Index;
