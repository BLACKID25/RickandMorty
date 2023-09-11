import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props)
   return (
      <div className={styles.container}>
         <button onClick={props.onClose}>X</button>

         <Link to={`/detail/${props.id}`}>
         <h3 className="card-name">{props.name}</h3>
         </Link>

         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt={props.name} />
      </div>
   );
}


// todo viene desde las props