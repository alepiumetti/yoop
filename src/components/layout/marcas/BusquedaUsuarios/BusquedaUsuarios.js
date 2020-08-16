import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { makeStyles } from '@material-ui/core/styles';

// Iconos
import MenuIcon  from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';

//Material UI
import { Container ,  IconButton , Typography , Toolbar , AppBar} from '@material-ui/core';

// Components 
import LogOut from "../logout/Logout"
import FormularioBusqueda from "./FormularioBusqueda"


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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Buscar Usuarios
          </Typography>
          <LogOut/>
        </Toolbar>
      </AppBar>
      <Container >
          <FormularioBusqueda/>
      </Container>
      <IconButton aria-label="help" onClick={() => {alert("ayuda")}}>
        <HelpIcon/>
      </IconButton>
    </div>
  );
}
