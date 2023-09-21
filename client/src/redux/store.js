import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import thunk from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // esta linea sirve para conectar nuestra App con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // esta linea sirve para que podamos hacer peticiones a una API/Servidor 
);

export default store;