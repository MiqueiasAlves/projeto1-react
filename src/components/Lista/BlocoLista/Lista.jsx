import React, { Component } from 'react';
import BlocoTexto from '../BlocoTexto';
import './style.css';


class  Lista extends Component {
    render() { 
        return ( 
            <div className="lista-anotacoes">
              
              { 
                this.props.blocoNota.map( (lista, indice) => {
                    return (
                        <article key={indice}>
                            <BlocoTexto titulo={lista.titulo} texto={lista.texto} /> 
                        </article>
                    )
                })
              
              }
              
          </div>
         );
    }
}
 
export default Lista;