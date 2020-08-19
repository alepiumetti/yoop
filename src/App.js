import React, {Component} from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';


//Style
import './styles/App.css';

//BDD

//Components 
import NavbarInicio from './components/layout/navbar-inicio/NavbarInicio'
import Navbar from './components/layout/navbar/Navbar'
import Inicio from './components/layout/index/Inicio'
import Footer from './components/layout/footer/Footer'
import Ayuda from './components/layout/ayuda/Ayuda'
import Marcas from './components/layout/marcas/Marcas'
import Asociate from './components/layout/asociate/Asociate'

import {useFirebaseApp} from 'reactfire'
import MarcasAmigas from './components/layout/marcas amigas/MarcasAmigas';
import { Grid } from '@material-ui/core';



//Main App
class App extends Component {

  render(){
    return <div className="App">
          <Switch>
            
              <Route exact path="/" render={()=> {
                return <div className="container"> 
                <NavbarInicio/>
                <Inicio/>
                <Footer/>
                </div>
            }}/>

              <Route exact path="/ayuda" render={()=>{
                return  <div > 
                <Navbar/>
                <Ayuda/>
                <Footer/>
                </div>
              }}/>            

              <Route exact path="/marcas" render={
                ()=>{
                  return <div>
                    <Marcas/>
                  </div>
                }
              }/>
              <Route exact path="/asociate" render={
                () => {
                  return <div className="containerAsociate">
                    <Navbar/>
                    <Asociate/>
                    <Footer/>
                  </div>
                }
              }/>
              <Route exact path="/marcas-amigas/:id" render={
                () => {
                  return <div>
                    <Navbar/>
                    <MarcasAmigas/>
                  </div>
                }
              }/>
          </Switch>
      </div>
  }

}


export default App;
