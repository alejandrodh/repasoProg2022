
let mainController = {

    index: function(req, res){

        //Conseguir info de la base de datos
        let listaDeProductos = [
            {
                nombre: 'zapatillas Nike',
                precio: 12313,
                enStock: true
            },
            {
                nombre: 'zapatillas Adidas',
                precio: 1233,
                enStock: true
            },
            {
                nombre: 'remera Nike',
                precio: 17563,
                enStock: true
            },
            {
                nombre: 'remera Puma',
                precio: 8753,
                enStock: true
            }

        ]

        return res.render('index', { productos: listaDeProductos })
    }
}

module.exports = mainController