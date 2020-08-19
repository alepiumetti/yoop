import React from "react";
import { Grid, TextField, Divider, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

import Ayuda from "./AyudaAsociate/DialogAyudaAsociate";

import UnMes from "../../img/1mes.jpg";
import SeisMeses from "../../img/6meses.jpg";
import DoceMeses from "../../img/12meses.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Asociate() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} justify="center" align="center">
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={UnMes}
                title="suscripción 1 mes"
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  <b>Accedé a descuentos en:</b>
                </Typography>
                <Typography align="left" color="textSecondary" variant="body1">
                  <CheckIcon />
                  Clases de pastelería y chocolatería
                  <br />
                  <CheckIcon />
                  Locales de repostería
                  <br />
                  <CheckIcon />
                  Clases Onlines
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h3" color="textPrimary" component="h5">
                  <b>$278</b>
                </Typography>
                <br />
                <Divider />
              </CardContent>
            </CardActionArea>
            <Typography>Asociate con:</Typography>
            <CardActions>
              <Button href="http://mpago.la/2xgvqwR" size="small">T. de Crédito</Button>
              <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=350651466-d1549ba4-09b2-44b9-82ba-b34bb49389ce" size="small">+ Formas de pago</Button>
              <IconButton >
                <Ayuda />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={SeisMeses}
                title="suscripción 6 meses"
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  <b>Accedé a descuentos en:</b>
                </Typography>
                <Typography align="left" color="textSecondary" variant="body1">
                  <CheckIcon />
                  Clases de pastelería y chocolatería
                  <br />
                  <CheckIcon />
                  Locales de repostería
                  <br />
                  <CheckIcon />
                  Clases Onlines
                  <br />
                  <CheckIcon />
                  <b>Ahorrás $278</b>
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h3" color="textPrimary" component="h5">
                  <b>$1390</b>
                </Typography>
                <br />
                <Divider />
              </CardContent>
            </CardActionArea>
            <Typography>Asociate con:</Typography>
            <CardActions>
              <Button href="http://mpago.la/2pRuZfN" size="small">T. de Crédito</Button>
              <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=350651466-5bde3c61-cc07-40fd-a1f1-fef8551326b3" size="small">+ Formas de pago</Button>
              <IconButton>
                <Ayuda />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DoceMeses}
                title="suscripción 12 meses"
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  <b>Accedé a descuentos en:</b>
                </Typography>
                <Typography align="left" color="textSecondary" variant="body1">
                  <CheckIcon />
                  Clases de pastelería y chocolatería
                  <br />
                  <CheckIcon />
                  Locales de repostería
                  <br />
                  <CheckIcon />
                  Clases Onlines
                  <br />
                  <CheckIcon />
                  <b>Ahorrás $834</b>
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h3" color="textPrimary" component="h5">
                  <b>$2502</b>
                </Typography>
                <br />
                <Divider />
              </CardContent>
            </CardActionArea>
            <Typography>Asociate con:</Typography>
            <CardActions>
              <Button href="http://mpago.la/1cHNMpn" size="small">T. de Crédito</Button>
              <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=350651466-38d8bbff-b41f-4b4b-a0f9-2cf316146da1" size="small">+ Formas de pago</Button>
              <IconButton>
                <Ayuda />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Asociate;
