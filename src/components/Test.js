import React, { Component } from 'react';
import Base from './Base';
 
// Esta classe tem como objetivo montar as informação de cada contato e passar para 
// a base montar agenda
export default class Tests extends Component{
    
    render() {
        // Objeto de contatos criados para teste
        const list = [
        {letra:"a",nome:"Ana Clara",cargo:"Diretora",tel:"31-91959897",email:"ana@teste.com"},
        {letra:"b",nome:"Bruno Alves",cargo:"Operador",tel:"31-91959897",email:"bruno@teste.com"},
        {letra:"c",nome:"Carlos Maia",cargo:"Front End",tel:"31-91959897",email:"maia@teste.com"},
        {letra:"d",nome:"Danrley Costa",cargo:"Back End",tel:"31-91959897",email:"costa@teste.com"},
        {letra:"e",nome:"Ediana maia",cargo:"Analista",tel:"31-91959897",email:"edi@teste.com"},
        {letra:"f",nome:"Fernanda alves",cargo:"Engenheira",tel:"31-91959897",email:"alves@teste.com"},
        {letra:"g",nome:"Gilson Salles",cargo:"Gerente",tel:"31-91959897",email:"salles@teste.com"}
    ]
    
        function Test(props) {            
            for(var i = 0 ; i < list.length ; i++){
                if (props.match(list[i].letra)) {
                    // fazer o acumulo de base To Do
                    var aux = 
                    <Base
                    name={list[i].nome} 
                    cargo={list[i].cargo} 
                    tel={list[i].tel} 
                    email={list[i].email}>                        
                    </Base>                    
                  }                                                  
                }                
                return aux;
            }            
        return (
            Test(this.props.letra)          
        );
    }
}
