let productoController = {

    index : function (req, res){
        return res.send ('Estoy en la página de productos')
    },
    
    show: function (req, res){
        let datosDeUnProducto = { 
                                   nombreDeProducto: 'zapatillas Nike',
                                   precio: 12332,
                                   enStock: false
                                }
                                
        return res.render ('product', datosDeUnProducto)
    }

}

module.exports = productoController
