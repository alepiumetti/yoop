import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Button } from "@material-ui/core";
import Moment from 'react-moment'

import style from "./ValidacionDelUsuarioStyle.module.css"




function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState(); //Datos completos del usuario
  const [DNI, setDNI] = useState(props.dni); //DNI del Usuario que se busca
  const [loading, setLoading] = useState(false);
  const [loadPago, setPago] = useState(false); 
  const [nombre, setNombre] = useState(props.usuario) //Nombre del usuario que se busca
  

  const listenForUsers = () => {  //Lee todos los usuarios de la DB
    let lista = []; // Crea una lista para guardarlos 
    const itemsRef = firebase.database().ref("usuarios"); //Se crea la referencia a la DB
    itemsRef.on(  //Se leen los datos y se guardan en lista
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
      buscarUsuario(lista); //LLama a función Buscar usuario con la lista de todos los usuarios cómo parámetro
    
  };


  const buscarUsuario = (listaUsuarios) => { 
    let lista = listaUsuarios; //Guarda el parámetro en una variable
    let nombreState = nombre.toLowerCase(); //Pasa el nombre del input a minusculas
    let dni =DNI; 

    lista.forEach((element) => {
      let nombreElement = element.nombre.toLowerCase(); //Se guarda el 
      console.log("element" ,element)
      let dniElement = element.dni;
      if (nombre !== "") {
        if (nombreElement.includes(nombreState)) {
          console.log(element.pago.toString());
          setUsuario(element)
          setPago(true);
        }
      }
      else if(DNI !== ""){
        if (dniElement === dni)
        console.log(element.pago.toString());
        setUsuario(element)
        setPago(true);
      }

      else {
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
