const { Sequelize } = require('sequelize');


/* Conexion generada con sequalize */
const db = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    // port: process.env.MYSQL_PORT,
    {
        host: process.env.MYSQL_HOST,
        /* sequelize tiene soporte para distintas bases de datos y se ingresa el tipo de base en dialect */
        dialect: "mysql",

    }
);

module.exports = db;
