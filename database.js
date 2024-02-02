const sequelize = require('sequelize');
const mssql = require('mssql');
// muito importante isso e a conexão com o banco sql server 2008 
const connection =new sequelize('Berp','sa','',{
    host:'localhost',
    dialect:'mssql',
    dialectOptions: {

        options: {
            validateBulkLoadParameters:false,
            encrypt: false,
            trustedConnection: true,
            trustServerCertificate: true,
            cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
            }
              
      
    }}
    
})



module.exports = connection;