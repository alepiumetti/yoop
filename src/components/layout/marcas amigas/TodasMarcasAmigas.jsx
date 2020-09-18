import React from "react";
import * as firebase from "firebase";
import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { useCollection } from "react-firebase-hooks/storage";
import { Button, CardActions, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ImagenMarca from "./ImagenMarca";
import PlaceHolderMarcaAmiga from "../../img/PlaceHolder2.jpg"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 325,
    alignText:"center"
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
  container:{
    display: "flex",
    justifyContent:"center"
  }
});

function TodasMarcasAmigas() {
  //firebase hooks
  const [marcas, loadingMarcas, errorMarcas] = useList(
    firebase.database().ref("marcas")
  );

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.container} >
        {!loadingMarcas &&
          marcas.map(function (marca, i) {
              
              if (marca.val().img === undefined){
                return(
                <Grid item key={marca.key} >
                    <Card className={classes.root}>              
                    <img src={PlaceHolderMarcaAmiga} style={{width:"250px"}} alt={`Imagen ${marca.val().marca}`} />    
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
                  <ImagenMarca alt={marca.val().marca} src={ marca.val().img[0]}/>
  
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
