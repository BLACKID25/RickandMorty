import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.container}>
         <button onClick={props.onClose}>X</button>
         <h3>{props.name}</h3>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt={props.name} />
      </div>
   );
}


// todo viene desde las props