import React from 'react';
import './App.css';
import Scroll from './components/scroll';
import List from './components/ListContact';

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo-mundiale.svg" className="App-logo" alt="logo" /> 
        <Scroll>        
        </Scroll>
        <div className="MundCatalog">        
        </div> 
      </header>
    </div>
  );
}

export default Index;
