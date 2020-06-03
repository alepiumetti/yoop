//-------------
//  imports
//-------------

//React - React Router - React Fire - Firebase

import React, { useState } from "react";
import * as firebase from "firebase";

// Styles

import style from "./FormularioBusquedaStyle.module.css";

//Iconos

//Material UI

import { TextField, Typography, Button, Grid } from "@material-ui/core";

//React Components

import ValidacionDeUsuario from "./ValidacionDeUsuario";

function FormularioBusqueda() {
  const [nombre, setNombre] = useState(""); //se ingresa el nombre y/ apellido
  const [dni, setDni] = useState(""); //se ingresa el DNI
  const [getUser, setGetUser] = useState(false); // es lo que determina cuando se busca a alguien para que pida al servidor

  const handleNombre = (e) => {
    let valor = e.target.value;
    setNombre(valor);
  };

  const handleDNI = (e) => {
    let valor = e.target.value;
    setDni(valor);
  };

  const get_user = () => {
    setGetUser(!getUser);
  };

  return (
    <div className={style.container}>
      {!getUser && (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Nombre y Apellido"
              value={nombre}
              onChange={handleNombre}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField label="DNI" value={dni} onChange={handleDNI} />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="default" onClick={get_user}>
              Buscar
            </Button>
          </Grid>
        </Grid>
      )}
      {getUser && (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ValidacionDeUsuario usuario={nombre} dni={dni} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={get_user} variant="contained">
              Volver
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default FormularioBusqueda;
