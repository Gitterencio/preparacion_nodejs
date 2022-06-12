
const express = require('express');
const port =3000;
var app = express();

app.get('/',(req,res)=>{
    res.send('Hola');
});

app.get('/home',(req,res)=>{
    res.send('ReadersDesing');
});

app.listen(port,()=>{
    console.log(`Servidor iniciado port: ${port}`);
});
