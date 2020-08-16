//-------------
//  imports
//-------------

//React - React Router - React Fire - Firebase

import React, { useState, Suspense, lazy } from "react";
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
        <div className={style.form}>
          <div>
            <TextField
              label="Nombre y apellido"
              value={nombre}
              onChange={handleNombre}
            />
          </div>
          <div>
            <TextField label="DNI" value={dni} onChange={handleDNI} />
          </div>
          <div className={style.containerBtn}>
            <Button
              className={style.btnBuscar}
              variant="contained"
              color="default"
              onClick={() =>{
                if ((dni === "") && (nombre==="")){
                alert("Debe ingresar algun dato de los usuarios. Si tenés dudas podés clickear en el signo de pregunta abajo a la izquierda" )
              }else{
                get_user()
              }}}
            >
              Buscar
            </Button>
          </div>
        </div>
      )}
      {getUser && (
        <Grid className={style.containerValidacion} container spacing={2}>
          <Grid className={style.contairnerDatos} item xs={3}>
              <ValidacionDeUsuario
                usuario={nombre}
                dni={dni}
                getUser={get_user}
              />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      )}
    </div>
  );
}
export default FormularioBusqueda;
