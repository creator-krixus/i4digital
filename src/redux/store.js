import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Se importa la funcion que tenemos en el Reducer del modulo usuarios o de los modulos
//que tenemos
import usuariosReducer from "./usuarios";
import albumsReducer from "./albumes";

//En esta constante se combinan todos los modulos de llamados a la API
const rootReducer = combineReducers({
    usuarios: usuariosReducer,
    albums: albumsReducer
})

//Configuracion de extension Redux devtools
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    return store
}