import SearchBar from "../searchbar/SearchBar";

export default function Nav( { onSearch } ) {
   //props = { onserarch}
   return (
      <div>
       <SearchBar
       onSearch={onSearch} />
   </div>
   );
}
   