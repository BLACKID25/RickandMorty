import SearchBar from "../searchbar/SearchBar";
import { NavLink} from "react-router-dom";

export default function Nav( { onSearch } ) {
   //props = { onserarch}
   return (
      <div>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
       <SearchBar
       onSearch={onSearch} />
   </div>
   );
}
   