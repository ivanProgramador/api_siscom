const Sequelize = require('sequelize');
const connection = require('./database');

const Produto = connection.define('Produto',{
    descricao:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    preco:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false,

    }
});

Produto.sync({force:false});

module.exports = Produto;