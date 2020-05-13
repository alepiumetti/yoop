//-------------
//  imports
//-------------

//React - React Router - React Fire - Firebase

import React , {useState} from 'react'
import * as firebase from 'firebase'

// Styles

import style from "./FormularioBusquedaStyle.module.css"

//Iconos

//Material UI

import {
    TextField,
    Typography,
    Button,
    Grid,
} from '@material-ui/core'

//React Components

import ValidacionDeUsuario from './ValidacionDeUsuario'



function FormularioBusqueda() {

    const [nombre,setNombre] = useState();
    const [dni,setDni] = useState();

    return (
        <div className={style.container}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField label="Nombre y Apellido" value={nombre}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="DNI" value={dni}/>
                </Grid>
                <Grid item xs={12}>
                    <ValidacionDeUsuario/>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormularioBusqueda
