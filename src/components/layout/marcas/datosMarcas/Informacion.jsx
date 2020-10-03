import React, { useEffect } from "react";
import * as firebase from "firebase";
import { useObject } from "react-firebase-hooks/database";
import { Grid, TextField, Typography } from "@material-ui/core";

const style = {
  textField: { padding: "10px" },
  tituloMarca: {
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "uppercase",
  },
};

function Informacion() {
  let user = firebase.auth().currentUser;

  const [usuario, loading, error] = useObject(
    firebase.database().ref(firebase.database().ref(`usuarios/${user.uid}`))
  );

  useEffect(() => {}, [loading]);

  return (
    <div style={style.container}>
      {!loading && (
        <Grid container spacing={2}>
          <Grid item xs="12">
            <Typography style={style.tituloMarca} variant="h3">
              {usuario.val().nombre}{" "}
            </Typography>
          </Grid>
          <Datos id={usuario.val().marca} />
        </Grid>
      )}
    </div>
  );
}

function Datos(props) {
  const [marca, loadingMarca, errorMarca] = useObject(
    firebase.database().ref(`marcas/${props.id}`)
  );

  useEffect(() => {}, [loadingMarca]);

  return (
    <div>
      {!loadingMarca && (
        <div>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().badge}
            label="Cantidad de descuento"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().desc}
            label="Descuento"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().cond}
            label="Condición"
            multiline
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().ig}
            label="Instagram"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().fb}
            label="Facebook"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().web}
            label="Web"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().dir}
            label="Dirección"
          ></TextField>
          <TextField
            style={style.textField}
            disabled
            value={marca.val().cel}
            label="Teléfono"
          ></TextField>
        </div>
      )}
    </div>
  );
}

export default Informacion;
