let productoController = {

    index : function (req, res){
        return res.send ('Estoy en la página de productos')
    },
    
    show: function (req, res){
        return res.send ('Estoy en la página del producto: ' + req.params.loquequiera)
    }

}

module.exports = productoController