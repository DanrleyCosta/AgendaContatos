import React from 'react';
import './App.css';
import Scroll from './components/scroll';
import Icons from './components/icons';

function Index() {
  return (
    <div className="App">
      <header className="App-header">
      <Icons></Icons>
      <Scroll></Scroll>
        <div className="MundCatalog">        
        </div> 
      </header>
    </div>
  );
}

export default Index;
