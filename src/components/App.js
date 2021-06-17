import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import Usuarios from './usuarios/Usuarios';
import {Provider} from 'react-redux';
import generateStore from "../redux/store";
import Albums from "./albums/Albums";
import NotFound from "./notFound/NotFound";
import Publicaciones from "../components/publicaciones/Publicaciones"

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
          <Route exact path="/Publicaciones">
              <Publicaciones />
          </Route>
          <Route component = {() => (
            <NotFound />
          )} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
