import React from "react";
import { Link } from "react-router-dom";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Iconos

//Material UI
import {
  Container,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";

// Components
import LogOut from "../logout/Logout";
import FormularioBusqueda from "./FormularioBusqueda";
import DialogAyuda from ".././ayudaMarcas/DialogAyuda";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            Buscar Usuarios
          </Typography>
          <LogOut />
        </Toolbar>
      </AppBar>
      <Container>
        <FormularioBusqueda />
      </Container>
      <DialogAyuda />
    </div>
  );
}
