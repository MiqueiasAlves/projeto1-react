import React, { Component } from 'react';
import './style.css';

class Formulario extends Component {
    
    constructor (props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleTitulo(event){
        this.titulo = event.target.value
    }
    _handleTexto(event){
        this.texto = event.target.value
    }


    _criarNota (event){
        event.preventDefault();
            
        this.props.nota(this.titulo, this.texto);

        const limpaCampo = document.querySelector('form');
       
        
        limpaCampo.titulo.value = "";
        limpaCampo.texto.value = "";        
        
    }

    render() { 
        return (  
            <form onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text"
                    name="titulo" 
                    placeholder="Digite o título do bloco..." 
                    onChange={this._handleTitulo.bind(this)} />
                <textarea 
                    type="text" 
                    name="texto" 
                    placeholder="Digite as informações..." rows={10}
                    onChange={this._handleTexto.bind(this)} />
                <button>Concluir</button>
            </form>
        );
    }
}
 
export default Formulario;