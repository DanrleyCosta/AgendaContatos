import React  from 'react';
import { render } from 'react-dom';
import '../App.css';
import scroll from './scroll'

export default function List() {    
    return (
      <div className="CardList" onClick={scroll.onClick}>
          <ul className="CardUl">
          </ul>        
      </div>
    )
  }
  
  render(<List />, document.getElementById('root'))