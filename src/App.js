import React, { Component } from 'react';
import Formualario from './components/Formulario'
import './assets/App.css';
import Lista from './components/Lista/BlocoLista';
import Header from './components/Header'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto){
    
    const novoDado = {titulo, texto}
    const novosDados = [...this.state.notas, novoDado ]
    
    const novoEstado = {
      notas: novosDados
    }
    this.setState(novoEstado)

   
  }
  render(){
    return (
      <>
      <Header />
      <div className="container">
          
          <Formualario nota={this.criarNota.bind(this)} />
          <Lista blocoNota={this.state.notas} />
      </div>
      </>
    );
  }
  
}

export default App;
