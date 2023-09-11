import Card from '../card/Card.jsx';

export default function Cards({characters, onClose}) {
   console.log(characters);  
   return (
      <div>
        {
           characters.map((personaje, apunt) => (
              <Card 
               id={personaje.id}
               key={apunt} 
               name ={personaje.name}
               status ={personaje.status}
               species ={personaje.species}
               geneder ={personaje.gender}
               origin ={personaje.origin.name}
               image= {personaje.image}
               onClose= {() => onClose(personaje.id)}
            />
         ))
      }   
   </div>
   );
}
