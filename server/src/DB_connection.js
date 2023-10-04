require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite")
const UserModel = require("./models/User")
const DATABASE_NAME = "rickandmorty"

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize)

UserModel(sequelize);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo! //*Relacionamos las tablas intermedias
const { User, Favorite } = sequelize.models;//*Desectructuramos las tablas  creadas
//*? Relación entre usuarios y favoritos (N-N)
User.belongsToMany(Favorite, {through: "User_favorites" });
Favorite.belongsToMany(User, {through: "User_favorites" })

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
