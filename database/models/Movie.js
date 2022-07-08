module.exports = function( sequelize, dataTypes){
    
    let alias = 'Movie';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type:dataTypes.STRING
        },
        rating:{
            type:dataTypes.DECIMAL
        },
        awards:{
            type:dataTypes.INTEGER
        },
        release_date:{
            type:dataTypes.DATE
        },
        length:{
            type:dataTypes.INTEGER
        },
        genre_id:{
            type:dataTypes.INTEGER
        },
    };

    let conf = {
        tableName: 'movies',
        timestamps: true, //si no lo querés usar hay que declarar los campos de timestamps en la variable cols
        underscored: true,

    };

    const Movie = sequelize.define(alias, cols, conf);

    //Van las relaciones entre los modelos
    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as: 'genre' , //alias de la relación
            foreignKey: 'genre_id',
        })

    }


    return Movie;

}