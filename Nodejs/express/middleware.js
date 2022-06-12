const express = require('express');
//al instalar express trae el modulo body-parser , revisar
const port =3000;
var app = express();

const bodyParser = require('body-parser');

const urlencodeParser = bodyParser.urlencoded({extended :false});

app.get('/',urlencodeParser,(req,res)=>{

   /*  let url = req.url;
    url = url.substring(url.indexOf('?') + 1);

    const params = url.split('&');
    let text = '';
    params.forEach(param => {
        let object = param.split('=');
        text += object[0] + ' : ' + object[1] + '<br/>';
    });

    res.send(`<h1> Tus datos son : <br/> ${text} </h1>`);
    console.log(text); */

    res.send(`<h1> Tus datos son : <br/> 
    Nombre: ${req.query.nombre} </h1>`);
    console.log(req.query);

    // /?nombre= yo


});



app.listen(port,()=>{
    console.log(`Servidor iniciado port: ${port}`);
});
