import React from 'react';
import './App.css';
import Scroll from './components/scroll';
import Icons from './components/icons';

// Pagina inicial (index)
function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <Icons></Icons>
        <Scroll></Scroll> 
      </header>
    </div>
  );
}

export default Index;
