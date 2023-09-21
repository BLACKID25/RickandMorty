import Card from '../card/Card.jsx'
import { connect } from 'react-redux';

const Favorites = ({ myfavorites }) => {
     return (
         <div>
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
