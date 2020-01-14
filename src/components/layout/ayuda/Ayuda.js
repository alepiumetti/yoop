import React, { Component } from 'react'

import './AyudaStyle.css'

import AandQ from './AyQ';



export class Ayuda extends Component {

    
    render() {
        return (
        <div className = "container-ayuda">
            <div className="container-menu-general">
                <a href="#seccion-ayuda-app">
                    <div className = "container-menu" id = "ayuda-app">
                        Ayuda con la App
                    </div>
                </a>
                <a href="#seccion-ayuda-suscripcion">
                    <div className = "container-menu" id = "ayuda-pagos">
                        Ayuda con Suscripción
                    </div>
                </a>
                <a href="#seccion-ayuda-desc">
                    <div className = "container-menu" id = "ayuda-desc">
                        Ayuda con descuentos
                    </div>
                </a>
                <a href="#seccion-ayuda-marcas-amigas">
                    <div className = "container-menu" id = "ayuda-marcas-amigas">
                        Ayuda a Marcas Amigas
                    </div>
                </a>
            </div>
            <div className = "container-AQ" >
                    <h2 className = "titulo-ayuda-app" id="seccion-ayuda-app">Ayuda con la App</h2>

                        <AandQ question = "Qué precio tiene la suscripción a Yoop" answer="Podés descargar la aplicación gratis, pero si querés tenér descuentos tenés que asociarte por un precio de $198"/>

                    <h2  className = "titulo-ayuda-suscripcion" id="seccion-ayuda-suscripcion">Ayuda con Suscripción</h2>

                        <AandQ question = "Cómo puedo pagar mi suscripción" answer = "El pago se hace con cualquier tarjeta de crédito. Inclusive podés hacerla con una tarjeta prepaga como Ualá o la tarjeta de MercadoPago"/>

                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>


                    <h2  className = "titulo-ayuda-desc" id="seccion-ayuda-desc"> Ayuda con descuentos </h2>

                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>

                    <h2  className = "titulo-ayuda-marcas-amigas" id="seccion-ayuda-marcas-amigas"> Ayuda a Marcas Amigas </h2>
                        
                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>

                        <AandQ question="pregunta" answer="respuesta"/>
                </div>  
        </div>
        )
    }
}

export default Ayuda
