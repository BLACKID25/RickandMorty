let myFavorites = [];

const postFav = (req, resp) => {
    //* req.body = {id, name, ..... }
    myFavorites.push(req.body) // llega el objeto entero y lo guardamos en el array
    return resp.status(200).json(myFavorites) // respondo con un archivo json    
}

const deleteFav = (req, res)=>{
    const { id } = req.params
    myFavorites = myFavorites.filter(char =>{
        return char.id !== Number(id)
    })
    return res.status(200).json(myFavorites)
}

module.exports = { postFav, deleteFav }