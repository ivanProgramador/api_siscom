const Sequelize = require('sequelize');
const connection = require('./database');

const CADCONEXAO_INTEGRADOR = connection.define('TB_CADCONEXAO_INTEGRADOR',{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true
    },
    NOME_EMPRESA:{
        type: Sequelize.STRING,
        allowNull:false
    },
    DADOS_CONEXAO:{
        type: Sequelize.STRING,
        allowNull:false
    },
    DADOS_DE_PARA:{
        type: Sequelize.STRING,
        allowNull:false
    },
    GUID:{
        type: Sequelize.STRING,
        allowNull:false
    }
   
}, { freezeTableName: true} )

//CADCONEXAO_INTEGRADOR.sync({force:true});


module.exports = CADCONEXAO_INTEGRADOR;