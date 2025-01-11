// conexion.js
const mysql = require('mysql');
require('dotenv').config(); // Importar dotenv para poder usar las variables de entorno

// Crear un pool de conexiones utilizando las variables de entorno
const pool = mysql.createPool({
    connectionLimit: 10, // Número máximo de conexiones en el pool
    host: process.env.DB_HOST,    // Dirección del servidor MySQL desde .env
    user: process.env.DB_USER,     // Usuario de la base de datos desde .env
    password: process.env.DB_PASSWORD, // Contraseña del usuario desde .env
    database: process.env.DB_NAME   // Nombre de la base de datos desde .env
});

// Exportar el pool para usarlo en otras partes de la aplicación
module.exports = pool;

// Exportar el pool para usarlo en otras partes de la aplicación