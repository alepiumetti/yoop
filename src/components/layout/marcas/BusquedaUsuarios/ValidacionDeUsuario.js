import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import {
  Button,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  Divider,
  Fade,
} from "@material-ui/core";
import Moment from "react-moment";
import { useList, useListVals } from "react-firebase-hooks/database";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import style from "./ValidacionDelUsuarioStyle.module.css";

function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState(); //Datos completos del usuario
  const [DNI, setDNI] = useState(props.dni); //DNI del Usuario que se busca
  const [loadPago, setPago] = useState(false); //Handler de contenido cuando el usuario existe
  const [nombre, setNombre] = useState(props.usuario); //Nombre del usuario que se busca
  const [noUser, setNoUser] = useState(false); //Handler de contenido cuando el usuario no existe

  const [values, loading, error] = useListVals(
    firebase.database().ref("usuarios")
  );

  const buscarUsuario = () => {
    let lista = values; //Guarda el parámetro en una variable
    let nombreState = nombre.toLowerCase(); //Pasa el nombre del input a minusculas

    if (nombre !== "" && DNI === "") {
      lista.find(function (element) {
        let nombreElement;
        if (element.nombre === undefined) {
        } else {
          nombreElement = element.nombre.toLowerCase();
        }
        if (nombreElement === nombreState) {
          setUsuario(element);
          setPago(true);
        } else {
          setNoUser(true);
        }
      });
    } else if (DNI !== "" && nombre === "") {
      lista.find((element) => {
        let dniElement = element.dni;
        if (dniElement === DNI) {
          setUsuario(element);
          setPago(true);
        } else {
          setNoUser(true);
        }
      });
    } else if (DNI !== "" && nombre !== "") {
      lista.find((element) => {
        let nombreElement = element.nombre.toLowerCase();
        let dniElement = element.dni;
        if (nombreElement === nombreState && dniElement === DNI) {
          setUsuario(element);
          setPago(true);
        } else {
          alert("Los datos no coinciden con ningun usuario");
        }
      });
    } else {
      alert("Debe ingresar el nombre o DNI del asociado");
    }
  };
  useEffect(() => {
    buscarUsuario();
  }, [loading]);

  return (
    <div>
      {loadPago && usuario.pago && (
        <Fade in={loadPago}>
          <div className={style.containerCard}>
            <div className={style.containerSuccess}>
              <CheckIcon style={{ color: "#FFF", fontSize: "120px" }} />
            </div>
            <div className={style.containerUser}>
              <Typography variant="h5">{usuario.nombre}</Typography>
              <Divider style={{ margin: "5px 0px 5px 0px" }} />
              <Typography variant="body1">DNI: {usuario.dni}</Typography>
              <Typography variant="body1">Teléfono: {usuario.tel}</Typography>
              <Button onClick={props.getUser} variant="contained">
                Volver
              </Button>
            </div>
          </div>
        </Fade>
      )}
      {loadPago && !usuario.pago && (
        <Fade in={loadPago}>
          <div className={style.containerCard}>
            <div className={style.containerFailed}>
              <CloseIcon style={{ color: "#FFF", fontSize: "120px" }} />
            </div>
            <div className={style.containerUser}>
              <Typography variant="h5">{usuario.nombre}</Typography>
              <Divider style={{ margin: "5px 0px 5px 0px" }} />
              <Typography variant="body1">DNI: {usuario.dni}</Typography>
              <Typography variant="body1">Teléfono: {usuario.tel}</Typography>
              <Button onClick={props.getUser} variant="contained">
                Volver
              </Button>
            </div>
          </div>
        </Fade>
      )}

      {noUser && !loadPago && (
        <div>
          <p>El usuario no existe o los datos son erroneos</p>
          <Button onClick={props.getUser} variant="contained">
            Volver
          </Button>
        </div>
      )}

      {loading && <CircularProgress />}
    </div>
  );
}

export default ValidacionDeUsuario;
