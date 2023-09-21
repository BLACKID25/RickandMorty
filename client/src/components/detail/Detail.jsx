import React from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
//console.log(useParams)
const { id } = useParams()
const [character, setCharacter] = useState ({})
console.log(character)

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div>
            <h1>Detail</h1>
            <h2>Card N# | {character?.id}</h2>
            <h2>Nombre | {character?.name}</h2>
            <h2>Estatus | {character?.status}</h2>
            <h2>Especie | {character?.species}</h2>
            <h2>Genero | {character?.gender}</h2>
            <h2>Nombre de Origen | {character.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}