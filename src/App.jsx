import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
//import characters from './data.js';
import { useState } from 'react';
import axios from "axios";


function App() {

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {  // { data: {personaje lo que deulveve el servidor }}
             if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !==Number(id)))
      // este boton lo pasamos a cards en la funcion mas abajo  
      // character = [ {id:2}, {id:2}, {id:3}]
      // id = 2 ejemplo donde buscamos el id 2 con la funcion antes creada 
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>  
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
