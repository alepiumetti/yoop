import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './inicioStyle.css';

export class Inicio extends Component {
    static propTypes = {

    }

    render() {
        return ( 
              <header className='header'>
                <div className="banner-header">
                  <h1 className="title-banner">
                    La primera comunidad de beneficios para pasteleros
                  </h1>
                  <button className="btn-descarga" type='button'>Bajate la app</button>
                  </div> 
                </header>

        )
    }
}

export default Inicio
