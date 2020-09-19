import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../../img/logobyn.svg";

import "./NavbarInicioStyle.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar-inicio">
        <div className="container-logo-inicio">
          <img src={logo} className="App-logo" alt="Logo Yoop" />
        </div>
        <nav className="nav-inicio">
          <Link className="btn-nav" to="/">
            {" "}
            Inicio{" "}
          </Link>
          <Link className="btn-nav" to="/asociate">
            {" "}
            Asociate{" "}
          </Link>
          <Link className="btn-nav" to="/marcas-amigas">
            {" "}
            Marcas Amigas{" "}
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
