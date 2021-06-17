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
import {Provider} from 'react-redux';
import generateStore from "./redux/store";
import Albums from "./components/albums/Albums";

function App() {
  const store = generateStore()
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/Usuarios">
            <Provider store={store}>
              <Usuarios />
            </Provider>
          </Route>
          <Route exact path="/Albumes">
            <Provider store={store}>
              <Albums />
            </Provider>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
