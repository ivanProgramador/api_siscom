const Sequelize = require('sequelize');
const connection = require('./database');

const MOVVITEM = connection.define('MOVVITEM',{

    ID_VENDA:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NRLOJA:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NRMOVI:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_CDVEND:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SEQPRO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SUBSEQ:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_CDPROD:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_QTDPRO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_VLRUNI:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_VLRTOT:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NMOBSE:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_IMPCOM:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SEQCOM:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_DHLANC:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_DHPRODUCAO:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_DHCOMA:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_DHSAIDA:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_CANCEL:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_CANUSU:{
        type: Sequelize.DATETIME,
        allowNull:false

    },
    VIT_DHCANC:{
        type: Sequelize.DATETIME,
        allowNull:false
    },
    VIT_CDALIQ:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_IMPFIS:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NRMOVD:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NRPEDI:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_CDGARC:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_STATUS:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SEQIMP:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_TOTPESO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SEQCAIX:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_SERVICO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_TXSERVICO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_CDVENDTRANS:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_NRTERMI:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_CST_ICMS:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_CST_COFINS:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_CST_PIS:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_DESCONTO:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_PONTOSFIDELIDADE:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_VALOR_ICMS:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_VALOR_COFINS:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_VALOR_PIS:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_VALOR_ISS:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_COO:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_COO:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_CSON:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_QTDANTERIOR:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_ECFSERIE:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_SEQSENHA:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    LOCAL_ENTREGA:{
        type: Sequelize.STRING,
        allowNull:false
    },
    ID_ORIGEM_TRANSFERENFCIA:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_ORIGEM_INTEGRADOR:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_PEDIDO_INTEGRADOR:{
        type: Sequelize.STRING,
        allowNull:false
    },
    NOME_CLIENTE:{
        type: Sequelize.STRING,
        allowNull:false
    },
    POSICAO_MESA:{
        type: Sequelize.STRING,
        allowNull:false
    },
    CADEIRA_MESA:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_SEQPRO_PAI:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_MODALIDADE_CONSUMO:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    VIT_DESCRICAO_INTEGRACAO:{
        type: Sequelize.STRING,
        allowNull:false
    },
    VIT_QTDFISCAL:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    VIT_VLRUNIFIS:{
        type: Sequelize.DECIMAL,
        allowNull:false
    }







    




}) 

module.exports = MOVVITEM