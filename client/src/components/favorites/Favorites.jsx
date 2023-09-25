import { useEffect, useState } from 'react';
import { filterCards, orderCards } from '../../redux/actions.js';
import Card from '../card/Card.jsx'
import { connect, useDispatch } from 'react-redux';

const Favorites = ({ myfavorites, onClose }) => {

    const [aux, setAux] = useState(false)
  

    const dispatch = useDispatch()
    const handleOrder = event =>{
        dispatch(orderCards(event.target.value))
    }
    
    const handlFilter = event =>{
        dispatch(filterCards(event.target.value))
    }
     return (
         <div>
            <select name ="order" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name ="filter" onChange={handlFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        {
             myfavorites?.map(fav => {
                // console.log(myfavorites)
                 return(
                    <Card
                     key={fav.id}
                     id={fav.id}
                     name={fav.name}
                     species={fav.species}
                     gender={fav.gender}
                     image={fav.image}
                     origin={fav.origin}
                     onClose={()=> onClose(fav.id)}
                    />
                )
            })
         }
        </div>
    )
 }

const mapStateToProps = (state) => {
    return {
        myfavorites: state.myFavorites
    }
 }
export default connect (
    mapStateToProps, 
    null
) (Favorites)
