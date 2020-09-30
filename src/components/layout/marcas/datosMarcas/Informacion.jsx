import React, { useEffect } from "react";
import * as firebase from "firebase";
import { useObject } from "react-firebase-hooks/database";
import { TextField, Typography } from "@material-ui/core";

function Informacion() {
  let user = firebase.auth().currentUser;

  const [usuario, loading, error] = useObject(
    firebase.database().ref(firebase.database().ref(`usuarios/${user.uid}`))
  );

  const [marca, loadingMarca, errorMarca] = useObject(
    firebase.database().ref(`marcas/${usuario.val().marca}`)
  );

  useEffect(() => {}, [loading, loadingMarca]);

  return (
    <div>
      {!loading && !loadingMarca && (
        <div>
          <Typography variant="h3">{usuario.val().nombre} </Typography>
          <TextField
            disabled
            value={marca.val().badge}
            label="Descuento"
          ></TextField>
        </div>
      )}
    </div>
  );
}

export default Informacion;
