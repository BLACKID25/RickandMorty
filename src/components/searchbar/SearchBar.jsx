import { useState } from "react";

export default function SearchBar(props) {
  
   const [search_id, setSearch_Id] = useState('');
  
   const handleChange =(event) =>{
      const { value } = event.target
      setSearch_Id (value);
   }
   
   const handleClick = event =>{
      event.preventDefault()
      props.onSearch(search_id)
      setSearch_Id("")
   }

   return (
      <div> <hr /> 
         <input 
           value={search_id}
           type="search" 
           name="search"
           id="search"
           onChange={handleChange}
         /> 
         <button onClick={handleClick}>Agregar</button>  
      </div>
   );
}
