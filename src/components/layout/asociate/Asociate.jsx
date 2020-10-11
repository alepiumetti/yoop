import React from "react";
import {
  Grid,
  TextField,
  Divider,
  IconButton,
  Collapse,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Ayuda from "./AyudaAsociate/DialogAyudaAsociate";

import UnMes from "../../img/1mes.jpg";
import SeisMeses from "../../img/6meses.jpg";
import DoceMeses from "../../img/12meses.jpg";
import FormAsociate from "./FormAsociate";

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

  const [checked6, setChecked6] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);

  const handleChange6 = () => {
    setChecked6((prev) => !prev);
  };
  const handleChange1 = () => {
    setChecked1((prev) => !prev);
  };
  const handleChange12 = () => {
    setChecked12((prev) => !prev);
  };

  return (
    <Grid
      container
      spacing={2}
      justify="space-evenly"
      alignItems="center"
      style={{
        height: "100%",
        paddingBottom: "100px",
        paddingTop: "100px",
        margin: "-20px",
      }}
    >
      <Grid align="center" item xs={12} sm={3}>
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
          <CardActions
            style={{
              justifyContent: "center",
            }}
          >
            <Typography>Asociate</Typography>
            <IconButton onClick={handleChange1}>
              <ArrowDropDownIcon />
            </IconButton>
          </CardActions>
          <Collapse in={checked1}>
            <CardActions>
              <FormAsociate meses={1} />
            </CardActions>
          </Collapse>
        </Card>
      </Grid>
      <Grid align="center" item xs={12} sm={3}>
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
          <CardActions
            style={{
              justifyContent: "center",
            }}
          >
            <Typography>Asociate</Typography>
            <IconButton onClick={handleChange6}>
              <ArrowDropDownIcon />
            </IconButton>
          </CardActions>
          <Collapse in={checked6}>
            <CardActions>
              <FormAsociate meses={6} />
            </CardActions>
          </Collapse>
        </Card>
      </Grid>
      <Grid align="center" item xs={12} sm={3}>
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
          <CardActions
            style={{
              justifyContent: "center",
            }}
          >
            <Typography>Asociate</Typography>
            <IconButton onClick={handleChange12}>
              <ArrowDropDownIcon />
            </IconButton>
          </CardActions>
          <Collapse in={checked12}>
            <CardActions>
              <FormAsociate meses={12} />
            </CardActions>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Asociate;
