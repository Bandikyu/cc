const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    /* host db hace referencia al alias de la direccion host en el contenedor de mysql 
    (cuando iniciamos el contenedor puede cambiar la ip por lo que el `db` siempre apunta a donde corresponde (calculo que es el DNS)) */
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
});

connection.connect();
module.exports = connection;