const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios") // importando axios

const getCharById =  async (req, res) => {
    // siempre que se haga un funcion async quiere decir que se puede hacer algo que se pueda romper debe llevar el try y catch
    try{
        const charId = req.params.id  // creamos el id con variable distinta a partir del params lo vamos a necesitar  llega rn forma de string
        const { data }  = await axios.get(URL + charId) // el axios nos devuelve todo 
        const { id, status, name, species, origin, image, gender} = data  // id de aca nos llega en forma de number
            // para el front el id era lo que nos envia la data es un Number
        const character = {id, status, name, species, origin, image, gender}
        character.name // aca nos preguntamos si existe el personaje con alguna de sus propiedades al existir una deben existir todas 
        //si existe el nombre entonces
            ? res.status(200).json(character)  // devolvemos el personaje
            : res.status(404).json("Not found") // sino existe el character.name nos arroja un error 
        } catch(error){
            res.status(500).send(error.message) // entramos en el cacht en caso de que no exista el personaje con id 
    }

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