import { ADD_FAV,ORDER,REMOVE_FAV,FILTER,ERROR } from "./action-types";  // nos estamos trayendo las acction creation



const initialState = {
    myFavorites: [],  // [{rick}, {morty, id:2}, {beth}]
    allCharacters: [], // va ser una copia
    user: "",
    errors: false
    
}

const reducer = (state = initialState, {type, payload}) =>{
    
    switch(type){
        // case ADD_FAV :
        //     return{
        //         ...state ,
        //         allCharacters:[
        //             ...state.allCharacters, 
        //             payload],
        //             myFavorites: [...state.myFavorites, payload] //payload es un { onjeto}
        //         };
        case ADD_FAV:
        return { ...state, 
            myFavorites: payload, 
            allCharacters: payload 
        };
       
        // case REMOVE_FAV:
        //     const filteredFavs = state.allCharacters.filter(fav => fav.id !== Number(payload))
        //     return {
        //         ...state,
        //          allCharacters: filteredFavs,
        //          myFavorites:filteredFavs
                
        //         // vamos a modificar myfavorites, aplicamos el filter que no retorna un nuevo array
        //     }   // y nos vamos a quedar con todos los fav donde su ID sea distinto a l que nos envie por payload
        
        case REMOVE_FAV:
            return { ...state, 
                myFavorites: payload,
                allCharacters: payload
            };

        case FILTER:
            if (payload==="All") return {  // en caso de que queramos retornar todos de nuevo 
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredCharacters = state.allCharacters.filter(cha => cha.gender === payload)
            return{
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderCopy = [...state.allCharacters]
             if(payload==="A"){
                 orderCopy= orderCopy.sort((a,b)=> {
                     if (a.name > b.name) return 1;
                     else return -1
                    } 
                ) 
            } else if (payload==="D"){
                 orderCopy= orderCopy.sort((a,b)=> {
                     if (a.name < b.name) return 1;
                     else return -1
                      } 
                ) 
        }
        return {
            ...state,
            myFavorites:orderCopy
        }
        case ERROR:
            return {
                ...state,
                errors: payload
            }

            default:
            return {...state};
    }
}
export default reducer;
