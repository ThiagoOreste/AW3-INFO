const express = require('express')
const app = express();

app.listen(3000, function(){
    console.log('Servidor está rodando em localhost:3000')
})

app.get('/', function(req,res){
    res.end('Seja bem-vindo ao meu servidor')
})