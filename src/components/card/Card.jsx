import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";

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
      addFav({id, name, species, gender, image, onClose})  // estamos pasando un personaje con uss propiedades
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
         <button onClick={onClose}>X</button> 
         <Link to={`/detail/${id}`}>
             <h3 className="card-name">{name}</h3>
         </Link>
         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h4>{origin}</h4>
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