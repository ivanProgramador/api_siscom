const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const connection = require('./database');
const Teste = require('./teste');

connection.authenticate().then(()=>{
    console.log('conectado')
}).catch(err=>{
    console.log(err);

})


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());






app.get('/',(req,res)=>{

    res.send('pagina inicial')

})
app.listen(1234,()=>{
    console.log('api rodando porta 1234');
})
