import React from "react";
import * as firebase from "firebase";
import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { useCollection } from "react-firebase-hooks/storage";
import { Button, CardActions, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ImagenMarca from "./ImagenMarca";

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
});

function TodasMarcasAmigas() {
  //firebase hooks
  const [marcas, loadingMarcas, errorMarcas] = useList(
    firebase.database().ref("marcas")
  );

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        {!loadingMarcas &&
          marcas.map(function (marca, i) {
              
              if (marca.val().img === undefined){
                return(
                <Grid item key={marca.key}>
                    <Card className={classes.root}>                    
                      <Typography variant="h6" component="h2">{marca.val().marca}</Typography>
                      <CardActions>
                        <Button size="small">Ver más</Button>
                      </CardActions>
                    </Card>
                  </Grid>)
            }else{
                return (
                <Grid item key={marca.key}>
                  <Card className={classes.root}>
                  <ImagenMarca src={ marca.val().img[0]}/>
  
                    <Typography variant="h6" component="h2">{marca.val().marca}</Typography>
                    <CardActions>
                      <Button size="small">Ver más</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );}
          })}
      </Grid>
    </div>
  );
}

export default TodasMarcasAmigas;
