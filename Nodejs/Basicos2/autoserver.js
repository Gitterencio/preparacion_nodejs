//nodemon, node-dev

const http = require('http');

//npm install -g nodemon, instalacion
// nodemon archivo.js, uso

//npm install -g node-dev, instalacion global
// node-dev archivo.js, uso

    http.createServer((req,res)=>{
        res.writeHead(200,{'content-type': 'text/html'});
        res.end(`
        <!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>Documento html</title>

    </head>

    <body>
        <h1>Hola </h1>
        <h2>Mundo </h2>

        <p>
            welcome to my server
        </p>
    </body>
</html>

        `);

}).listen(3000);//puerto// localhost:3000

console.log('Servidor iniciado..');

