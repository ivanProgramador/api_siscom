const Sequelize = require('sequelize');
const connection = require('./database');

const ProdutoVendido = connection.define('Produto',{
    descricao:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    preco:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false,

    }
});


ProdutoVendido.sync({force:false});

module.exports = ProdutoVendido;