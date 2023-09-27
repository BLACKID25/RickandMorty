const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios") // importando axios

const getCharById = (req, res) => {
    //*character/:id =>req.params = { id: 2 }
    const {id} = req.params  // creamos el id a partir del params lo vamos a necesitar 
    axios.get(URL + id)  // devuelve un promises y hacemos una peticion a la url con axios 
        .then(({ data }) =>{
            const { id, status, name, species, origin, image, gender} = data
            const character = {id, status, name, species, origin, image, gender}
                 character.name // aca nos preguntamos si existe el personaje con alguna de sus propiedades al existir una deben existir todas 
                //si existe el nombre entonces
                    ? res.status(200).json(character)  // devolvemos el personaje
                    : res.status(404).json("Not found") // sino existe el character.name nos arroja un error 
        })
        .catch(error => res.status(500).send(error.message)) // entramos en el cacht en caso de que no exista el personaje con id 

}

module.exports = getCharById;



// const axios = require("axios")

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     //axios me devuelve una promesa 
//     // promesa = {status: pending}
//     .then(({ data }) =>{  // que es data? data = {id, name, gender, ...}
//         const character = {
//             id: data.id, 
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,  // puedeir .name revisar
//             image: data.image,
//             status: data.status
//         }
//        return res
//             .writeHead(200, {"Content-Type": "application/json"})
//             .end(JSON.stringify(character))
//     })
//     .catch(error =>{
//         return res
//             .writeHead(500, {"Content-Type": "text/plain"})
//             .end(JSON.stringify(error.message))
//     })
// }

// module.exports = getCharById;