const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors()); //saber qual dominio ta conusmindo dados da api

app.use(cookieParser());

app.use(express.json()); //Para enviar e receber dados json do front para o back

app.get('/teste',function(req,res){
    res.json({message:'hello word'});
});


app.listen(3000,function(){
    console.log(`serve runing on port ${3000}`)
})