import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Usuarios from './components/usuarios/Usuarios';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/usuarios">
              <Usuarios />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
