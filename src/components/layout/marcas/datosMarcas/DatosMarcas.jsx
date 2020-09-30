import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Drawer from "../BusquedaUsuarios/Drawer";
import LogOut from "../logout/Logout";
import Informacion from "./Informacion";

import {
  Container,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";

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

export default function DatosMarcas() {
  const classes = useStyles();

  return (
    <div>
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
        <Informacion />
      </Container>
    </div>
  );
}
