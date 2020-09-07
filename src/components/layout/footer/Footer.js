import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

import './FooterStyle.css';

import logoInstagram from '../../icons/001-instagram.svg' ;
import logoFacebook from '../../icons/002-facebook.svg' ;
import logoWhatsapp from '../../icons/003-whatsapp.svg' ;
import logoGmail from '../../icons/004-gmail.svg' ;

import downloadApp from '../../img/google-play-badge.png';

import logoColor from '../../img/logo yoop.svg'


export class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <div className="container-footer-logo">
                    <img src={logoColor} className="logoColor" alt="Logo Yoop"/>
                </div>
                <div className="container-footer-menu">
                    <ul>
                        <li><Link className="btn-footer" to="/" > Inicio </Link></li> 
                        <li><Link className="btn-footer" to="/asociate"> Aasociate </Link></li>
                    </ul>
                </div>
                <div className="container-footer-socialmedia">
                    <div> {/* Container logo Facebook */}
                        <a href="https://facebook.com/academia.yoop">
                            <img src={logoFacebook} className="logo-sm" alt="Logo facebook"/>
                        </a>
                    </div>
                    <div> {/* Container logo Instagram */}
                        <a href="https://instagram.com/academia.yoop">
                            <img src={logoInstagram} className="logo-sm" alt="logo Instagram"/>
                        </a>
                    </div>
                    <div> {/* Container logo WhatsApp */}
                        <a href="http://wpp-redirect.herokuapp.com/go/?p=5493413717471&m=">
                            <img src={logoWhatsapp} className="logo-sm" alt="logo WhatsApp"/>   
                        </a>
                    </div>
                    <div> {/* Container logo Gmail */}
                        <a href="mailto:academia@yoop.com.ar">
                            <img src={logoGmail} className="logo-sm" alt="logo Gmail"/>
                            </a>
                    </div>
                </div>
                <div className="container-download-app">
                    <a href="https://play.google.com/store/">
                        <img src={downloadApp} className="img-downloadApp" alt="Descarga la app en android"/>
                    </a> 
                </div>
            </div>
        )
    }
}

export default Footer
