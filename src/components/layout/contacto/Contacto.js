import React, { Component } from 'react'

import "./ContactoStyle.css";

export class Contacto extends Component {

    render() {
        return ( 
        <div className = "container-contacto"> 
            <div className = "container-form">
                <form action="/contacto" method="post">
                    
                    <p>
                        ¿Tenés alguna pregunta?
                    </p>
                    <p className = "campos-requeridos">Los campos requeridos están marcados con un <span className="asterisco-required-contact">*</span></p>

                    <p> 
                        Nombre<span className="asterisco-required-contact">*</span> <input type = "text" name = "user_nombre" id = "nombre" required/> 
                        &nbsp;
                        Apellido<span className="asterisco-required-contact">*</span> <input type = "text" name = "user_apellido" id = "apellido" required/>
                    </p> 
                    
                    <p> 
                        Teléfono<span className="asterisco-required-contact">*</span> <input type = "phone" name = "user_telefono" id = "tel" required/> 
                        &nbsp;
                        E-mail<span className="asterisco-required-contact">*</span> <input type = "email" name = "user_email" id = "email" required/> 
                    </p> 
                    
                    <p> Mensaje<span className="asterisco-required-contact">*</span>
                        <br/>
                        <textarea name = "mensaje" rows = "4" cols = "30" id = "user_msg" placeholder = "Escribinos.." required></textarea>
                    </p>
                    
                    <p>
                    <input className = "btn-form" type = "submit" id = "enviar" value = "Enviar" />
                    </p>

                    
                    

                </form>
            </div>
        </div>
        )
    }
}

export default Contacto