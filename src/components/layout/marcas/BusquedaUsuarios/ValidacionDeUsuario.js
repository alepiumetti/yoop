import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Button } from "@material-ui/core";
import Moment from 'react-moment'

import style from "./ValidacionDelUsuarioStyle.module.css"




function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState();
  const [DNI, setDNI] = useState(props.dni);
  const [loading, setLoading] = useState(false);
  const [loadPago, setPago] = useState(false);
  const [nombre, setNombre] = useState(props.usuario)
  

  const listenForUsers = () => {
    let lista = [];
    const itemsRef = firebase.database().ref("usuarios");
    itemsRef.on(
      "value",
      function (snapshot) {
        snapshot.forEach((child) => {
          lista.push({
            id: child.val().id,
            dni: child.val().dni,
            ingresos: child.val().ingresos,
            nacimiento: child.val().nacimiento,
            nivel: child.val().nivel,
            pago: child.val().pago,
            tel: child.val().tel,
            nombre: child.val().nombre,
            email: child.val().email,
          });
        });
      },
      function (errorObject) {
        alert("Carga incompleta");
      }
    )
      buscarUsuario(lista);
    
  };


  const buscarUsuario = (listaUsuarios) => {
    let lista = listaUsuarios;
    let nombreState = nombre.toLowerCase();
    let dni =DNI;

    lista.forEach((element) => {
      let nombreElement = element.nombre.toLowerCase();
      console.log(element)
      let dniElement = element.dni;
      if (nombre !== "" || DNI !== "") {
        if (nombreElement.includes(nombreState) || dniElement === dni) {
          console.log(element.pago.toString());
          setUsuario(element)
          setPago(true);
        }
      } else {
        console.log("no existe");
      }
    });
    setLoading(true);

  };

  console.log('DNI :>> ', DNI);


  useEffect( () => {
    listenForUsers();
  }, []);

  return (
    <div >
      {loadPago && usuario.pago &&(
        <div className={style.containerValido }>
          Nombre y Apellido: {usuario.nombre}
          <br />
          DNI: {usuario.dni}
          <br />
          pago:{usuario.pago.toString()}
          <br />
          <Moment local format="DD/MM/YYYY"/>
        </div>
      )}
      {loadPago && !usuario.pago &&(
        <div className={style.containerInvalido}>
            Nombre y Apellido: {usuario.nombre}
          <br />
          DNI: {usuario.dni}
          <br />
          pago:{usuario.pago.toString()}
          <br />
          <Moment local format="DD/MM/YYYY"/>
          
        </div>
      )}

<Button onClick={props.getUser} variant="contained">
              Volver
      </Button>


    </div>
  );
}

export default ValidacionDeUsuario;
