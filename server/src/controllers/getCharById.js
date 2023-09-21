const axios = require("axios")

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //axios me devuelve una promesa 
    // promesa = {status: pending}
    .then(({ data }) =>{  // que es data? data = {id, name, gender, ...}
        const character = {
            id: data.id, 
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,  // puedeir .name revisar
            image: data.image,
            status: data.status
        }
       return res
            .writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(character))
    })
    .catch(error =>{
        return res
            .writeHead(500, {"Content-Type": "text/plain"})
            .end(JSON.stringify(error.message))
    })
}

module.exports = getCharById;