import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
//import characters from './data.js';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/about/About"
import Detail from "./components/detail/Detail"
import Form from "./components/form/Form"
import Favorites from './components/favorites/Favorites';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess]=useState(false)   //* creamos Un estado local llamado "access" que se inicialice en false.
   const email = "25ingchourio@gmail.com"    //* usuario declarado para accesar
   const password="123456"                   //* constraseña creada 


//Crea una función llamada "login" que reciba por parámetro "userData". Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro. En caso afirmativo, el estado local access ahora será true. Importa el hook "useNavigate" de react-router-dom y haremos que nos redirija a /home si la información es correcta.

const navigate = useNavigate();

   // function login(userData) {
   //    if (userData.password === password && userData.email === email) {
   //       setAccess(true);
   //       navigate("/home");
   //    }
   // }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {access} = (await axios(URL + `?email=${email}&password=${password}`)).data  // debe llevar el await delante de la promesa
   //      const {data} = await axios(URL + `?email=${email}&password=${password}`)  // debe llevar el await delante de la promesa
         setAccess(access);
         //setAccess(data.access);
         access && navigate('/home');
        // data.access && navigate('/home');
        if (!access) alert("Incorrect data, please check username or password")
      }catch (e) {
         return alert("User not Exist")

      }





      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      // });
   }

   useEffect(() => {
   !access && navigate('/');
   }, [access]);


   async function onSearch(id) {
      // validamos si existe el personaje para que no se repita 
      const charById = characters.filter(char => char.id===Number(id)) // nos devuelve el array con el personaje [{}]
      if (charById.length)  return alert("The Character alredy exists !!!")


      try {
         const { data } =  await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            setCharacters((oldChars) => [
                ...oldChars, 
                     data
                  ]);
      } catch (e){
         alert(e)

      }


      // axios(`http://localhost:3001/rickandmorty/character/${id}`)
      //    .then(({ data }) => {  // { data: {personaje lo que deulveve el servidor }}
      //        if (data.name) {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //        } else {
      //           window.alert('¡No hay personajes con este ID!');
      //    }
      // });
   };

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !==Number(id)))
      // este boton lo pasamos a cards en la funcion mas abajo  
      // character = [ {id:2}, {id:2}, {id:3}]
      // id = 2 ejemplo donde buscamos el id 2 con la funcion antes creada 
   }
   

   return (

      <div className='App'>

         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path="/home" 
            element={<Cards characters={characters} 
            onClose={onClose}/>}
            />
            <Route path ="/about" 
            element= {<About/>}
            />
            <Route path = "/detail/:id" 
            element = {<Detail/>}
            />

            <Route exact path="/" 
            element={<Form login={login}/>}
            />
            
            <Route path = "/favorites" 
            element = {<Favorites onClose={onClose}/>}
            />
         </Routes>
      </div>
  );
}

export default App;
