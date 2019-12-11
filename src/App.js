import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


//Style
import './styles/App.css';

//BDD

//Components 
import Navbar from './components/layout/navbar/Navbar'
import Inicio from './components/layout/index/Inicio'
import Footer from './components/layout/footer/Footer'
import Asociate from './components/layout/asociate/Asociate'

//Main App
class App extends Component {

  render(){
    return <div className="App">
          
          <Router>
            
              <Route exact path="/" render={()=> {
                return <div className="container"> 
                <Navbar className="nav-bar"/>
                <Inicio/>
                <Footer/>
                </div>
            }}/>

              <Route exact path="/asociate" render={()=>{
                return  <div> 
                <Navbar/>
                 <Asociate/>
                <Footer/>
                </div>
              }}/>

              <Route exact path="/ayuda" render={()=>{
                return  <div> 
                <Navbar/>
                
                <Footer/>
                </div>
              }}/>

              <Route exact path="/iniciar-sesion" render={()=>{
                return  <div> 
                
                
                <Footer/>
                </div>
              }}/>

            
          </Router>
      </div>
  }

}


export default App;
