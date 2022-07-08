const db = require('../database/models');
const genres = db.Genre;

let generoController = {
    index: function(req, res){

    },

    show: function(req, res){
        //traiga el parámetro de la ruta
        let id = req.params.id
        //busque todas las películas del id encontrado en la ruta.
        genres.findByPk(id, {
          include: [{
                association: 'movies'
            }]  
        })
            .then(function(moviesByGenre){
                //moviesByGenre tiene los datos del género y las perliculas
                let genreName = moviesByGenre.name;
                let peliculas = moviesByGenre.movies;

                return res.render('genres', {
                    nombreGenero: genreName,
                    movies: peliculas,
                })
            }) 
            .catch(function(error){
                console.log(error);
            })


    }


}

module.exports = generoController