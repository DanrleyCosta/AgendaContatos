import React, { Component } from 'react';
import Base from './Base';

 
export default class Tests extends Component{
    
    render() {
        // Objeto de contatos
        const list = [
        {letra:"a",nome:"Ana Clara",cargo:"Diretora",tel:"31-91959897",email:"ana@teste.com"},
        {letra:"b",nome:"Bruno Alves",cargo:"Operador",tel:"31-91959897",email:"bruno@teste.com"},
        {letra:"c",nome:"Carlos Maia",cargo:"Front End",tel:"31-91959897",email:"maia@teste.com"},
        {letra:"d",nome:"Danrley Costa",cargo:"Back End",tel:"31-91959897",email:"costa@teste.com"},
        {letra:"e",nome:"Ediana maia",cargo:"Analista",tel:"31-91959897",email:"edi@teste.com"},
        {letra:"f",nome:"Fernanda alves",cargo:"Engenheira",tel:"31-91959897",email:"alves@teste.com"},
        {letra:"g",nome:"Guilherme Salles",cargo:"Gerente",tel:"31-91959897",email:"salles@teste.com"}
    ]
        function Test(props) {
            for(var i = 0 ; i <= 6 ; i++){
                if (props.match(list[i].letra)) {
                    // fazer o acumulo de base
                    var aux = <Base name={list[i].nome} cargo={list[i].cargo}></Base>;
                  }                                                  
                }
                return aux;
            }            
        return (
            Test(this.props.letra)          
        );
    }
}