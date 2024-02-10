const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const EJS = require("ejs");
const cors = require('cors');
const connection = require('./database');
const Produto = require('./Produto');
const Pedido = require('./Pedido');
const ProdutoVendido = require("./ProdutoVendido");

app.set("view engine","EJS");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


connection.authenticate().then(()=>{
    console.log('conectado')
}).catch(err=>{
    console.log(err);

})

//rotas de formulario

app.get("/form_prod",(req,res)=>{

    res.render("cadastro");
})

//rota para o formulario de edição 

app.get('/produtos/edit/:id',(req, res)=>{

    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/")
    }else{
        Produto.findByPk(id).then(produto=>{
            if(produto != undefined){
                res.render('edit',{produto:produto})
            }else{
                res.redirect("/")
            }
        })
    }

})

//rotas para controlar pedido

app.get('/pedido',(req,res)=>{

    res.render('pedido');
})











//rotas de execução

app.post("/criaproduto",(req,res)=>{

    var descricao = req.body.descricao;
    var preco = req.body.preco;

    Produto.create(
        {
            descricao: descricao,
            preco: preco
        }
    ).then(()=>{
        res.redirect("/")
    })

})
//editar produto

app.post('/editarproduto',(req,res)=>{

    var id = req.body.id;
    var descricao = req.body.descricao;
    var preco =  req.body.preco;

    Produto.update({descricao:descricao,preco:preco},{where:{id:id}}).then(()=>{
        res.redirect("/");
    })

})


//apagar produto

app.post('/apagarproduto',(req,res)=>{
    var id = req.body.id;
    Produto.destroy({where:{id:id}}).then(()=>{
        res.redirect("/");
    })
})

app.get('/',(req,res)=>{

    Produto.findAll().then(produtos=>{
        res.render('inicio',{produtos:produtos});

})

    

       
})
app.listen(1234,()=>{
    console.log('api rodando porta 1234');
})
