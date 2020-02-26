import React, { Component } from 'react';
import '../App.css';
 
// Esta classe tem como objetos passar para a rota de /Perfil as informações completos de cada
// contato
export default class Info extends Component{
 
    render() {        
        return (
            <div className="App2">
                <div className="App-header">
                    <div className="App-perfil">
                        <img src="0-1.jpg" className="perfil" alt="logo" />
                        <p className="legenda">{this.props.name}</p>
                        <p className="legenda">{this.props.cargo}</p>
                    <div>                    
                    </div>
                        <div className="CardPerfil">
                            <div className="divMundi">
                                <img id="logoMundi" src="Group-142.svg" className="perfil" alt="logo" />
                                <p className="legenda">{this.props.tel}</p> 
                            </div> 
                            <div>
                                <p className="legenda">{this.props.email}</p> 
                                <img id="linha" src="Group-130.svg" className="perfil" alt="logo" />
                            </div>             
                        </div>
                        <img id="qrcode" src="qrcode.png" className="perfil" alt="logo" />
                    </div>        
                </div>
            </div>
        );
    }
}