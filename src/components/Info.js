import React, { Component } from 'react';
import '../App.css';
 
// Esta classe tem como retorno montar e passar para a rota /Perfil as informações completas de cada
// contato.
export default class Info extends Component{
   
    render() {        
        return (
            <div className="App2">
                <div className="App-header">
                    <div className="App-perfil">
                        <img src="0-1.jpg" className="perfil" alt="logo" />
                        <p className="legenda">example</p>
                        <p className="legenda">Gerente</p>
                    <div>                    
                    </div>
                        <div className="CardPerfil">
                            <div className="divMundi">
                                <img id="logoMundi" src="Group-142.svg" className="perfil" alt="logo" />
                                <p className="legenda">(31)9285-8574</p> 
                            </div> 
                            <div>
                                <p className="legenda">teste@gmail.com</p> 
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