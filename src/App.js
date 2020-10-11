import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Style
import "./styles/App.css";

//BDD

//Components
import NavbarInicio from "./components/layout/navbar-inicio/NavbarInicio";
import Navbar from "./components/layout/navbar/Navbar";
import Inicio from "./components/layout/index/Inicio";
import Footer from "./components/layout/footer/Footer";
import Ayuda from "./components/layout/ayuda/Ayuda";
import Marcas from "./components/layout/marcas/Marcas";
import Asociate from "./components/layout/asociate/Asociate";
import TodasMarcas from "./components/layout/marcas amigas/TodasMarcasAmigas";

import MarcasAmigas from "./components/layout/marcas amigas/MarcasAmigas";
import DatosMarcas from "./components/layout/marcas/datosMarcas/DatosMarcas";
import TyC from "./components/layout/TyC/TyC";
import PagoEnProceso from "./components/layout/asociate/PagoEnProceso";
import PagoExitoso from "./components/layout/asociate/PagoExitoso";

//Main App
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="container">
                <NavbarInicio />
                <Inicio />
                <Footer />
              </div>
            </Route>

            <Route exact path="/ayuda">
              <Navbar />
              <Ayuda />
              <Footer />
            </Route>

            <Route exact path="/marcas">
              <Marcas />
            </Route>
            <Route exact path="/marcas/informacion">
              <DatosMarcas />
            </Route>
            <Route exact path="/asociate">
              <Navbar />
              <Asociate />
              <Footer />
            </Route>
            <Route exact path="/marcas-amigas/:id">
              <Navbar />
              <MarcasAmigas />
              <Footer />
            </Route>
            <Route exact path="/terminos-y-condiciones">
              <Navbar />
              <TyC />
              <Footer />
            </Route>
            <Route exact path="/asociate/pago-exitoso">
              <Navbar />
              <PagoExitoso />
              <Footer />
            </Route>
            <Route exact path="/asociate/pago-en-proceso">
              <Navbar />
              <PagoEnProceso />
              <Footer />
            </Route>
            <Route exact path="/marcas-amigas">
              <Navbar />
              <TodasMarcas />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
