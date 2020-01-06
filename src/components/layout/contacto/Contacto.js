import React, { Component } from 'react'

import "./ContactoStyle.css";

export class Contacto extends Component {

    render() {
        return ( 
        <div className = "container-contacto"> 
            <div className = "container-explicacion" >
                <h1>
                    Hablanos
                </h1>
                <p>
                    Si tenés alguna pregunta o recomendación, tenemos multiples medios para que te comuniques con nosotros.
                </p>

                
            </div>

            <div className = "container-numeros">

            </div>
        </div>
        )
    }
}

export default Contacto