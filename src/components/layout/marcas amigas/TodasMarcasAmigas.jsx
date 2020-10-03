import React from "react";
import * as firebase from "firebase";
import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { useCollection } from "react-firebase-hooks/storage";
import {
  Button,
  CardActions,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ImagenMarca from "./ImagenMarca";
import PlaceHolderMarcaAmiga from "../../img/PlaceHolder2.jpg";
import BannerMarino from "../../img/BannerPublicidadMarino.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 325,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  Typography: {
    padding: "10px",
    maxWidth: "260px",
  },
  imgs: {
    padding: "10px",
    width: "275px",
  },
});

function TodasMarcasAmigas() {
  //firebase hooks
  const [marcas, loadingMarcas, errorMarcas] = useList(
    firebase.database().ref("marcas")
  );

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.container}>
        <img
          src={BannerMarino}
          style={{ padding: "25px" }}
          alt="Banner Marino"
        />
        {!loadingMarcas &&
          marcas.map(function (marca, i) {
            if (
              marca.val().img === undefined ||
              marca.val().img[0] === undefined ||
              marca.val().img[0] === ""
            ) {
              return (
                <Grid item key={marca.key}>
                  <Link to={`/marcas-amigas/id=${marca.key}`}>
                    <Card className={classes.root}>
                      <img
                        className={classes.imgs}
                        src={PlaceHolderMarcaAmiga}
                        alt={`Imagen ${marca.val().marca}`}
                      />
                      <Typography
                        variant="h6"
                        component="h2"
                        className={classes.Typography}
                      >
                        {marca.val().marca}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              );
            } else {
              return (
                <Grid item key={marca.key}>
                  <Link to={`/marcas-amigas/id=${marca.key}`}>
                    <Card className={classes.root}>
                      <ImagenMarca
                        width={"275px"}
                        alt={marca.val().marca}
                        src={marca.val().img[0]}
                      />

                      <Typography
                        variant="h6"
                        component="h2"
                        className={classes.Typography}
                      >
                        {marca.val().marca}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              );
            }
          })}
        {loadingMarcas && <CircularProgress style={{ alignSelf: "center" }} />}
      </Grid>
    </div>
  );
}

export default TodasMarcasAmigas;
