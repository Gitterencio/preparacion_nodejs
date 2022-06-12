//api estatica

const http = require('http');

const ordenes =[
    {'nombre': 'sopa','cantidad':3},
    {'nombre': 'maiz','cantidad':2}
];

    http.createServer((req,res)=>{
        if(req.url == '/'){
            res.writeHead(200,{'content-type': 'text/json'});
        res.end(JSON.stringify(ordenes));

        }else if(req.url == '/ordenes-2'){
            pedidosdos(res);

        }else if(req.url == '/ordenes-sopa'){
            pedidosNombre('sopa',res);

        }else{
            res.writeHead(404,{'content-type': 'text/plain'});
            res.end('Solicitud no encontrada');
        }
        
        

}).listen(3000);//puerto// localhost:3000

console.log('Servidor iniciado..');

const pedidosdos =(res)=>{
    const arrg= ordenes.filter(item =>{
        return item.cantidad == 2;
    })

    res.writeHead(200,{'content-type': 'text/json'});
    res.end(JSON.stringify(arrg));
};


const pedidosNombre = (nombre,res) =>{
    const arrg= ordenes.filter(item =>{
        return item.nombre == nombre;

    })

    res.writeHead(200,{'content-type': 'text/json'});
    res.end(JSON.stringify(arrg));
};