const db = require("./conection2");
const { DataTypes } = require("sequelize");

/* 
Por medio de sequelize se genera un modelo de ingreso de datos a la base de datos.
`define` tiene en este caso tiene 2 argumentos:
    - el primero es un string que indica el nombre de la tabla en la base de datos
    - el segundo es un objeto que indica el nombre de la columna y el tipo de dato
*/
const PostModel = db.define("posts", {
    titulo: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: {
                args: true,
                msg: "Solo se permiten letras"
            },
            len: {
                args: [2,20],
                msg: "Debe tener entre 2 y 20 caracteres"
            }
        }
    },
    contenido: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: {
                args: true,
                msg: "Solo se permiten letras"
            },
            len: {
                args: [2,200],
                msg: "Debe tener entre 2 y 20 caracteres"
            }
        }
    },
});

module.exports = PostModel;