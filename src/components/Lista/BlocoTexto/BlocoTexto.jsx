import React, { Component } from 'react';
import './style.css'


class  BlocoTexto extends Component {
    render() { 
        return ( 
            <>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.texto}</p>
            </>           
         );
    }
}
 
export default BlocoTexto;