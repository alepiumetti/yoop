import React, { Component } from 'react'

import './AyudaStyle.css'

import AandQ from './AyQ';



export class Ayuda extends Component {

    
    render() {
        return (
        <div className = "container-ayuda">
                <div className ="title-preguntas">
                    <h1> Preguntas Frecuentes </h1>
                </div>
                <div className = "container-menu">
                    Ayuda con la App
                </div>
                <div className = "container-menu">
                    Ayuda con los pagos
                </div>
                <div className = "container-menu">
                    Ayuda con las marcas
                </div>
                <div className = "container-menu">
                    Ayuda con
                </div>
                <div className = "container-AQ" >
                    <AandQ question = "Qué precio tiene la suscripción a Yoop" answer="Podés descargar la aplicación gratis, pero si querés tenér descuentos tenés que asociarte por un precio de $198"/>
                    <AandQ question = "Cómo puedo pagar mi suscripción" answer = "El pago se hace con cualquier tarjeta de crédito. Inclusive podés hacerla con una tarjeta prepaga como Ualá o la tarjeta de MercadoPago"/>
                </div>
        </div>
        )
    }
}

export default Ayuda
