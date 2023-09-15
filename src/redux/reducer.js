import { ADD_FAV,REMOVE_FAV } from "./action-types";  // nos estamos trayendo las acction creation



const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, {type, payload}) =>{
    
    switch(type){
        case ADD_FAV :
            return{
                ...state ,
                myFavorites:[...state.myFavorites, payload] //payload es un { onjeto}
                };
       
        case REMOVE_FAV:
            return {
                ...state,
                 myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
                // vamos a modificar myfavorites, aplicamos el filter que no retorna un nuevo array
            }   // y nos vamos a quedar con todos los fav donde su ID sea distinto a l que nos envie por payload
        
            default:
            return {...state};
    }
}
export default reducer;
