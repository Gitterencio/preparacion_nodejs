const http = require('http');
const fs = require('fs');

    http.createServer((req,res)=>{

        if(req.method == 'GET'){
            res.writeHead(200,{'content-type': 'text/html'});
         fs.createReadStream('./form.html','UTF-8').pipe(res);

        }else if(req.method == 'POST'){

            let body='';
            req.on('data', chunk=>{
                body+=chunk;
            });

            req.on('end', ()=>{
                res.writeHead(200,{'content-type': 'text/html'});
                
                res.end(`<!DOCTYPE html>

                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                
                        <title>Formulario</title>
                
                    </head>
                
                    <body>
                       <h1> Datos recibidos</h1>
                       <p>${body}</p>
                    </body>
                </html>
                `);
            });

        }else{

        }

}).listen(3000);//puerto// localhost:3000

console.log('Servidor iniciado..');