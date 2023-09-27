const express = require('express');
// const getCharById = require('./controllers/getCharById');
// const user = require("./controllers/login");
// const { deleteFav, postFav } = require('./controllers/handleFavorites');
const server = express();
const PORT = 3001;   // declaramos el puerto
const router = require("./routes/index")
const morgan = require("morgan")



//!usamos para probar las rutas con el thunder 
// server.get("/rickandmorty/character/:id", getCharById)
// server.get("/rickandmorty/user", user)
// server.post("/rickandmorty/fav", postFav)
// server.delete("/rickandmorty/fav/:id", deleteFav)

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json()); // creamos el middleword

server.use(morgan("dev"))

server.use("/rickandmorty", router)

server.listen(PORT, () => {  // creamos el server con su propiedad
   console.log('Server raised in port: ' + PORT);
});














// const http =require ("http")  // importamos desde http desde el modulo http 
// 
// const datapersonaje = require ("./utils/data")
// const getCharById = require ("./controllers/getCharById")

// http.createServer((req, res) => {
//     //! da acceso a request desde cualquier host
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     // //!RUTAS
//     if(req.url.includes("/rickandmorty/character")){
//             const id = req.url.split("/").pop()
//             getCharById(res, id)
//         }
        
        
//     }).listen(PORT, "127.0.0.1",
//     () => console.log(`Server listening on port ${PORT}`)
//     )



    
    // //est console.log mostramos en la terminal el valor del id 
    //    //console.log(req.url.split("/").pop())
    //    // [rick, character, 2]
    //    //!creamos la condicional si la url incluye "/rickandmorty/character"
    //    if(req.url.includes("/rickandmorty/character")){
    //        const id = req.url.split("/").pop()
    //        //datapersonaje.id = number
    //        // id = string debemos llevarlo a number
    //        const personaje = datapersonaje.find(pers => pers.id === Number(id));
    //        //personaje = { ---- personaje} || undefine eso nos retorna la funcion 
    //        if (personaje){
    //            return res
    //                    .writeHead(200, {"content-type":"aplication/json"})
    //                    .end(JSON.stringify(personaje))
    //        } else {
    //            return res
    //                    .writeHead(404, {"content-type":"aplication/json"})
    //                    .end(JSON.stringify({message: "Personaje NOT FOUND!!!"}))
    //        }
    //    }
    //    //! este ultimo return .res nos sirve para devolver el mensaje en caso de que la ruta no es la correcta 
    //    return res
    //            .writeHead(404, {"content-type":"aplication/json"})
    //            .end(JSON.stringify({message: "ERROR DE URL, Revisa tu Dirección URL"}))
    
    
    

