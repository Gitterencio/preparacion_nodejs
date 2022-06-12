const http = require('http');
const fs = require('fs');
const path = require('path');

//request y respons
http.createServer((req,res)=>{
    console.log(`${req.method} solicita ${req.url}`);

    if(req.url == '/'){
        fs.readFile('./ReadersDesing/index.html','UTF-8',
        (err,html) =>{
            res.writeHead(200,{'content-type': 'text/html'});
        res.end(html);
        });
    }else if(req.url.match(/.css$/)){
        const reqPath = path.join(__dirname,'ReadersDesing',req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');

        res.writeHead(200,{'content-type': 'text/css'});
        fileStream.pipe(res);
    
        //no tengo jpgs
    }else if(req.url.match(/.jpg$/)){

        const reqPath = path.join(__dirname,'ReadersDesing',req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');
        
        res.writeHead(200,{'content-type': 'image/jpg'});
        fileStream.pipe(res);

    }else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end('ERROR 404');
    }


}).listen(3000);//puerto// localhost:3000

console.log('Servidor iniciado..');

//https://nodejs.org/api/