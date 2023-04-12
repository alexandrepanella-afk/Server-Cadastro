const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/hello", function(req, res){
    res.json({dados:"hello, world"});
    console.log(res)
});

app.post("/cadastrar-contratos", function (req, res){
    var conteudo = JSON.stringify(req.body);
    var fs = require('fs');
    fs.writeFile('cadastro-contrato.txt', conteudo, 'utf8', function (err){
        if (err) throw err;
        console.log(conteudo, 'formulario gravado')
    })
})

app.listen(3000, () => console.log("Servidor rodando"));