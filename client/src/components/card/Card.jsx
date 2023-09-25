import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import Cards from "../cards/Cards";

// aplicamos destructuring a nuestro props
 function Card({myFavorites, id, name, species, status, origin, gender, image, onClose, addFav, removeFav}) {
 //  console.log(props)

 // creamos un estado local con destrucuring 
 const [myFav, setmyFav] = useState(false)

 // creamos una funcion que nos permite hacer 2 acciones
 const handleFavorite = () => {
   if (myFav){
      setmyFav(false);
      removeFav(id)
   }
   else{
      setmyFav(true)
      addFav({id, name, status, species, gender, image,origin, onClose})  // estamos pasando un personaje con uss propiedades
   }        // esto es lo mismo que character
 }

 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setmyFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={styles.container}>
      <button onClick={handleFavorite}>{myFav ? '❤️' : '🤍'}</button> 
         <button onClick={onClose}> x </button> 
         <Link to={`/detail/${id}`}>
             <h4 className="card-name">{name}</h4>
         </Link>
         <h6>{gender}</h6>
         <h6>{origin}</h6>
         <h6>{species}</h6>
         <h6>{status}</h6>
         <img src={image} alt={name} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
  }
}
// creando la funcion para despachar las 2 action creadas se importan 
const mapDispatchToProps = (dispatch) => {
   return {
       addFav: (character) => { dispatch(addFav(character)) },
       removeFav: (id) =>{ dispatch(removeFav(id)) }
      }
   }

export default connect (
   mapStateToProps, 
   mapDispatchToProps
)(Card);

// todo viene desde las props