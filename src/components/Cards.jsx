import Card from './Card';
import styles from "./Card.module.css"

export default function Cards({characters}) {
   console.log(characters);
   return (
      <div>
        {
           characters.map((personaje, apunt) => (
              <Card 
               key={apunt} 
               name ={personaje.name}
               status ={personaje.status}
               species ={personaje.species}
               geneder ={personaje.gender}
               origin ={personaje.origin.name}
               image= {personaje.image}
               onClose= {() => window.alert('¿Seguro que desea Cerrar la Card?')}
            />
         ))
      }   
   </div>
   );
}
  