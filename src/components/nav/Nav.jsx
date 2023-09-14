import SearchBar from "../searchbar/SearchBar";
import { NavLink} from "react-router-dom";
import { Route, Routes, Router, useLocation, useNavigation } from 'react-router-dom';

export default function Nav( { onSearch } ) {
   //props = { onserarch}
   
   // const Nav = () =>{
   //    const location = useLocation();

   //    if (location.pathname === '/'){
   //       return null
   //    }
   // }

   return (
      <div>
        <NavLink to="/home">
            <button>Home</button> <line /> <line />
        </NavLink>
        <NavLink to="/about">
            <button>About</button> <line />
        </NavLink>
        <button onClick={() => window.location.href = "/login"}>Log Out</button>
       <SearchBar
       onSearch={onSearch} /> <line />
   </div>
   );
}
   