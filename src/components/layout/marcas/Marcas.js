import React, { useState } from "react";

import { Container, Grid, Typography, Tooltip} from "@material-ui/core";

import style from "./marcasStyle.module.css"

import Logo from "../../img/logo yoop.svg";
import Auth from "./auth/Auth"
import BusquedaUsuarios from "./BusquedaUsuarios/BusquedaUsuarios"

import {useUser} from 'reactfire'

function Marcas() {

  const user = useUser()
  return (
    !user ? (
    <div className={style.containerBase}>
      <Grid container style={{paddingTop:"5px",paddingLeft:"5px"}}>
        <Grid item xs={6}>
          <img src={Logo} className="App-logo" alt="Logo Yoop" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Marcas amigas</Typography>
        </Grid>
      </Grid>
          <div className={style.container}>
            <div className={style.containerLogin}>
                <Auth/>
            </div>
          </div>
    </div>)
    : (
      <BusquedaUsuarios/>
    )
  );
}

export default Marcas;
