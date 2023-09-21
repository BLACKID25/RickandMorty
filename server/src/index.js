const http =require ("http")  // importamos desde http desde el modulo http 
const PORT = 3001
const datapersonaje = require ("./utils/data")

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    //!RUTAS
    //est console.log mostramos en la terminal el valor del id 
    //console.log(req.url.split("/").pop())
    // [rick, character, 2]
    //!creamos la condicional si la url incluye "/rickandmorty/character"
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop()
        //datapersonaje.id = number
        // id = string debemos llevarlo a number
        const personaje = datapersonaje.find(pers => pers.id === Number(id));
        //personaje = { ---- personaje} || undefine eso nos retorna la funcion 
        if (personaje){
            return res
                    .writeHead(200, {"content-type":"aplication/json"})
                    .end(JSON.stringify(personaje))
        } else {
            return res
                    .writeHead(404, {"content-type":"aplication/json"})
                    .end(JSON.stringify({message: "Personaje NOT FOUND!!!"}))
        }
    }
    //! este ultimo return .res nos sirve para devolver el mensaje en caso de que la ruta no es la correcta 
    return res
            .writeHead(404, {"content-type":"aplication/json"})
            .end(JSON.stringify({message: "ERROR DE URL, Revisa tu Dirección URL"}))


}).listen(PORT, "127.0.0.1",
    () => console.log(`Server listening on port ${PORT}`)
 )