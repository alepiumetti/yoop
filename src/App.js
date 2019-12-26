import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//Style
import './styles/App.css';

//BDD

//Components 
import Navbar from './components/layout/navbar/Navbar'
import Inicio from './components/layout/index/Inicio'
import Footer from './components/layout/footer/Footer'


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

              <Route exact path="/ayuda" render={()=>{
                return  <div> 
                <Navbar/>
                
                <Footer/>
                </div>
              }}/>            

              <Route exact path="/contacto" render={()=>{
                return <div>
                  <Navbar/>

                  <Footer/>
                </div>
              }}/>
          </Router>
      </div>
  }

}


export default App;
