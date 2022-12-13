//Con sequalize - aca igual tenemos un modelo de datos construido con conection2 1️⃣
const PostModel = require("../models/PostModel");
/* //Con mysql simple - aca no hay un modelo construido de datos 2️⃣
const connection = require("../models/connection"); */

module.exports = {
  create: (req, res) => {
    res.render("posts/create");
  },

  store: async (req, res) => {
    await PostModel.create(req.body); // aca estoy usando el modelo con conexion por sequelize 1️⃣

    /*   //Aca estoy usando la conexion para iniciar una query a la base donde le inserto en posts los datos seteados 2️⃣
    connection.query("INSERT INTO posts SET ?", req.body, (error, results) => { 
      if (error) {
        throw error;
      }
      console.log(results);
    }); */

    /* Despues puedo ver una manera de enviar un json como respuesta,
      y en base al contenido del json se genera un alert informando el estado del envio.
      Todo eso tendria que procesarlo en el frontend de "create" por medio de una promesa
      que se inicie con una funcion que se active con el envio del formulario */
    res.redirect("/posts");
    // res.send("Entraste en store");
  },

  allPosts: async (req, res) => {
    /*con el metodo findAll del modelo definido traemos todos los datos de la DB
    y se guardan en la constante posts para pasarlos en el render como objeto al posts/index*/
    const posts = await PostModel.findAll();
    /* // puedo enviar el objeto de la forma clasica con "propiedad: valor" o 
    //simplificar un poco ya que propiedad y valor tiene el mismo nombre
    res.render("posts/index" , {posts: posts}); */
    res.render("posts/index", { posts });
  },

  showPost: async (req, res) => {
    const post = await PostModel.findByPk(req.params.id);
    res.render("posts/show", { post });
  },

  formEdit: async (req, res) => {
    const post = await PostModel.findByPk(req.params.id);
    res.render("posts/edit", { post });
  },
  confirmEdit: async (req, res) => {
    // Para actualizar en sequelize tengo el metodo update dentro del modelo definido
    // Algo a tener en cuenta es que en la actualizacion tengo que apuntar a UNA FILA y esto lo logro pasando la query
    // WHERE por medio de un objeto.
    await PostModel.update(req.body, { where: { id: req.params.id } });
    res.redirect("/posts");
  },

  deletePost: async (req, res) => {
    await PostModel.destroy({ where: { id: req.params.id } });
    res.redirect("/posts");
  },
};
