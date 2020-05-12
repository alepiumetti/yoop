import React, { Component } from 'react';



// Imports Icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

// Imports IMG

import smartphoneApp from '../../img/banner-mobile.png';
import logoGooglePlay from '../../img/google-play-badge.png';
import iconoBags from '../../icons/bags.svg';
import iconoQr from '../../icons/qr.svg';
import iconoSmartphone from '../../icons/smartphone.svg';
import iconoSmartphoneDesc from '../../icons/smartphonedescuento.svg'
import imgCompra from '../../img/market.png';

// Import Styles 

import './inicioStyle.css';

export class Inicio extends Component {


    render() {
        return ( 
          <div>
              <header className='header'>
                <div className="banner-header">
                  <div className="container-title-btn">
                    <h1 className="title-banner">
                      La primera comunidad de descuentos para pasteleros
                    </h1>
                      <div className="container-btn">
                        <a href="https://www.google.com"><button className="btn-descarga" type='button'>Descargá la app</  button></a>
                        <img src={logoGooglePlay} className="logoGooglePlay-header" alt=""/>

                      </div>
                    </div>
                    <div className="container-img-app">
                      <img src={smartphoneApp} className="img-smartphone" alt=""/>                      
                    </div>
                  </div> 
                </header>
                <div className="container-comofunciona">
                  <div className="container-title-comofunciona">
                    <h1 className="title-comofunciona">¿Cómo Funciona?</h1>
                  </div>
                  <div className="container-pasos">
                    <div className="paso-descarga">
                      <img src={iconoSmartphone} className="img-paso-descarga" alt="" />
                      <p className="description-paso-descarga">Descargás la app</p>
                    </div>
                    <div className="paso-descarga">
                      <img src={iconoQr} className="img-paso-descarga" alt="" />
                      <p className="description-paso-descarga">Te suscribis y obtenés tu QR</p>
                    </div>
                    <div className="paso-descarga">
                      <img src={iconoSmartphoneDesc} className="img-paso-descarga" alt="" />
                      <p className="description-paso-descarga">Buscás las marcas amigas</p>
                    </div>
                    <div className="paso-descarga">
                      <img src={iconoBags} className="img-paso-descarga" alt="" />
                      <p className="description-paso-descarga">Comprás con descuento</p>
                    </div>
                  </div>
                </div>

                <div className="container-marca-amiga">
                  
                  <div className="container-title-btn-marca-amiga">
                    <p className="title-marca-amiga">Sumate como marca amiga  </p>
                    <a href="http://wpp-redirect.herokuapp.com/go/?p=5493413717471&m=Hola!%20Quiero%20sumarme%20como%20marca%20amiga%20y%20brindar%20descuentos%20a%20los%20asociados.">
                      <button className="btn-marca-amiga">
                        <p>
                          Quiero ser parte  <FontAwesomeIcon icon={faWhatsapp}/>
                        </p>
                      </button> 
                    </a>
                  </div>
                  
                  <div className="img-marca-amiga">
                    <img src={imgCompra} className="img-marcaamiga" alt="Imagen Marcas amigas" />
                  </div>
                </div>
            </div>

        )
    }
}

export default Inicio
