const http = require('http');

//request y respons
/*http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end('Hola mundo');*/

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
        <h1>Hola mundo</h1>

        <p>
            wlcome to my server
        </p>
    </body>
</html>

        `);

}).listen(3000);//puerto// localhost:3000

console.log('Servidor iniciado..');
