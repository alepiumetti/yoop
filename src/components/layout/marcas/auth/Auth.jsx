import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import style from "./Auth.module.css";
import { TextField, Button } from "@material-ui/core";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useUser();
  const firebase = useFirebaseApp();

  const submit = async () => {
    if (email === "alepiumetti@gmail.com") {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          var errorCode = error.code;
          switch (
            errorCode //Verificación de error.
          ) {
            case "auth/invalid-email":
              alert("Email inválido");
              break;
            case "auth/wrong-password":
              alert("Contraseña incorrecta");
              break;
            default:
              alert("Ocurrió un error al iniciar sesión.");
          }
        });
    } else {
      // alert("Ocurrió un error al iniciar sesión.");
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          var errorCode = error.code;
          switch (
            errorCode //Verificación de error.
          ) {
            case "auth/invalid-email":
              alert("Email inválido");
              break;
            case "auth/wrong-password":
              alert("Contraseña incorrecta");
              break;
            default:
              alert("Ocurrió un error al iniciar sesión.");
          }
        });
    }
  };

  return (
    !user && (
      <div>
        <div>
          <TextField
            placeholder="Email"
            type="email"
            id="email"
            className={style.formField}
            required
            onChange={(ev) => setEmail(ev.target.value)}
            color="secondary"
          />
        </div>
        <br />
        <div>
          <TextField
            placeholder="Contraseña"
            required
            type="password"
            id="password"
            className={style.formField}
            onChange={(ev) => setPassword(ev.target.value)}
            color="secondary"
          />
        </div>
        <br />
        <Button onClick={submit} variant="contained" color="default">
          Iniciar sesión
        </Button>
      </div>
    )
  );
};
