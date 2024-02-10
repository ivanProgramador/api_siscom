const Sequelize = require('sequelize');
const connection = require('./database');
const ProdutoVendido = require('./ProdutoVendido')

const Pedido = connection.define('Pedido',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    cliente:{
        type: Sequelize.STRING,
        allowNull:false,

    }

});

Pedido.hasMany(ProdutoVendido);

Pedido.sync({force:false});

module.exports = Pedido;