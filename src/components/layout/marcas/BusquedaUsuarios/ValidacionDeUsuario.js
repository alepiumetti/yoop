import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Button } from "@material-ui/core";
import Moment from 'react-moment'

function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState();
  const [DNI, setDNI] = useState(props.dni);
  const [loading, setLoading] = useState(false);
  const [loadPago, setPago] = useState(false);
  const [nombre, setNombre] = useState(props.usuario)
  

  const listenForUsers = async () => {
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
    );
    setLoading(true);
    await buscarUsuario(lista);
  };

  const buscarUsuario = (listaUsuarios) => {
    let lista = listaUsuarios;
    let nombreState = nombre.toLowerCase();
    let dni = DNI.toLowerCase();

    lista.forEach((element) => {
      let nombreElement = element.nombre.toLowerCase();
      console.log(element)
      let dniElement = element.dni;
      if (nombre !== "") {
        if (nombreElement.includes(nombre) || dniElement === dni) {
          console.log(element.pago.toString());
          setUsuario(element)
          setPago(true);
        }
      } else {
        console.log("no existe");
      }
    });
  };

  useEffect(() => {
    listenForUsers();
  }, []);

  return (
    <div >
      {loadPago && (
        <div style={{margin:"auto"}}>
          nombre: {usuario.nombre}
          <br />
          dni: {usuario.dni}
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
