const router = require("express").Router()

const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
const { postFav, deleteFav } = require("../controllers/handleFavorites") // se exporta desectructurado ya que viene como un objeto 


//rickandmorty viene del index 
//! GET getCharById: "/character/:id"
    router.get("/character/:id", getCharById)

//! GET login: "/login"
    router.get("/login", login)

//! POST postFav: "/fav"
    router.post("/fav", postFav)

//! DELETE deleteFav: "/fav/:id"
    router.delete('/fav/:id', deleteFav);

module.exports = router;