import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as firebase from "firebase";
import {
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import style from "./MarcaAmigaStyle.module.css";
import ImagenMarca from "./ImagenMarca";
import { useObject } from "react-firebase-hooks/database";
import ImagenMarcaAmiga from "../../img/PlaceHolder2.jpg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function MarcasAmigas(props) {
  const [id, setID] = useState("");

  const [marca, loadingMarca, errorMarca] = useObject(
    firebase.database().ref(`marcas/${id}`)
  );

  const database = firebase.database();

  let url = useParams();

  useEffect(() => {
    setID(url.id.slice(3));
  }, [loadingMarca]);

  console.log("marca", marca);
  return (
    <div>
      {!loadingMarca && (
        <Grid container spacing={2}>
          <Grid item xs={3} alignContent="left">
            <Link to="/marcas-amigas">
              <IconButton aria-label="volver">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={9} alignContent="center" className={style.titleMarca}>
            <Typography variant="h3">{marca.val().marca}</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            {marca.val().img === undefined ||
            marca.val().img[0] === undefined ||
            marca.val().img[0] === "" ? (
              <img
                src={ImagenMarcaAmiga}
                alt={`PlaceHolder Marca Amiga`}
                style={{ width: "70%" }}
              />
            ) : (
              <ImagenMarca src={marca.val().img[0]} width={"50%"} />
            )}
          </Grid>
          <Grid item xs={6}>
            <p>
              <b>{marca.val().badge}</b>
            </p>
            {marca.val().cond === "" ? (
              <p></p>
            ) : (
              <p>
                <b>Condiciones:</b> {marca.val().cond}
              </p>
            )}

            {marca.val().desc === "" ? (
              <p></p>
            ) : (
              <p>
                <b>Descuentos:</b> {marca.val().desc}
              </p>
            )}

            {marca.val().email === "" ? (
              <p></p>
            ) : (
              <p>
                <b>Email:</b> {marca.val().email}
              </p>
            )}

            {marca.val().fb === "" ? (
              <p></p>
            ) : (
              <p>
                <a href={`https://facebook.com/${marca.val().fb}`}>
                  <b>Facebook:</b> {marca.val().fb}
                </a>
                <a href={`https://facebook.com/${marca.val().fb}`}>
                  <b>Facebook:</b> {marca.val().fb}
                </a>
              </p>
            )}

            {marca.val().ig === "" ? (
              <p></p>
            ) : (
              <p>
                <a href={`https://instagram.com/${marca.val().ig}`}>
                  <b>Instagram:</b> {marca.val().ig}
                </a>
              </p>
            )}
            {marca.val().web === "" ? (
              <p></p>
            ) : (
              <p>
                <b>Web:</b> {marca.val().web}
              </p>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default MarcasAmigas;
