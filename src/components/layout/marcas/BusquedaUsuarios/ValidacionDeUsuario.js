import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [DNI, setDNI] = useState(props.dni);
  const [usuarios, setUsuarios] = useState();
  const [loading, setLoading] = useState(false);

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
    setUsuarios(lista);
    setLoading(true);
  };

  useEffect(() => {
    listenForUsers();
  }, []);

  return (
    <div>
      nombre: {usuario}
      <br />
      dni: {DNI}
    </div>
  );
}

export default ValidacionDeUsuario;
