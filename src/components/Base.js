import React, { Component } from 'react';
import '../App.css';
 
// Esta classe tem como principio a reutilização de seus cards, ou seja, a classe 
// pai de Test 
export default class Base extends Component{
     
    render() {          
        return (            
            <div className="CardList" href="/Perfil">
                <ul className="CardUl">          
                    <li className="CardLi CardLi2">
                        <div className="photos">
                            <div className="photosLayout">
                            <img src="0-1.jpg"  className="photoPerfil" alt="logo" />
                            </div>
                        </div>
                        <div className="mainText">                        
                            <span className="mainSpan">{this.props.name}</span>
                            <p className="mainP">{this.props.cargo}</p>
                        </div>
                    </li> 
                    <li className="CardLi"></li>
                    <li className="CardLi"></li>
                    <li className="CardLi"></li>
                </ul>
            </div>
            
        );
    }
}