import React  from 'react';
import { render } from 'react-dom';
import '../App.css';
import scroll from './scroll'

const perfil = [    
    {telefone:"11-12345678",cargo:"Diretora",nome:"Maria"},
    {telefone:"12-55698745",cargo:"Gerente",nome:"Pedro"},
    {telefone:"21-78542359",cargo:"Desenvolvedor",nome:"João"},
    {telefone:"27-25854567",cargo:"Operador",nome:"Tiago"},
    {telefone:"33-31595187",cargo:"Tester",nome:"Carla"}
]
    

export default function List() {    
    return (
      <div className="CardList" onClick={scroll.onClick}>
          <ul className="CardUl">
              <li className="CardLi CardLi2">
                  <div className="photos">
                      <div className="photosLayout">
                      <img src="0-1.jpg"  className="photoPerfil" alt="logo" />
                      </div>
                  </div>
                  <div className="mainText">
                      <span className="mainSpan">Leonardo</span>
                      <p className="mainP">Diretor de Ti</p>
                  </div>
              </li>
              <li className="CardLi"></li>
              <li className="CardLi"></li>
              <li className="CardLi"></li>
              <li className="CardLi"></li>
          </ul>        
      </div>
    )
  }
  
  render(<List />, document.getElementById('root'))