var fs = require('fs');

//let archivo = fs.readFileSync('./ext/h.txt');
//console.log(`Tamaño : ${archivo.length}`);

let stream = fs.createReadStream('./ext/h.txt','UTF-8');

let data = '';

stream.once('data', () =>{
    console.log('iniciando el stream...\n');
});

stream.on('data', (chunk) =>{
   // console.log(`${chunk.length} |`);
    data += chunk + '\n';
});

stream.on('end', () =>{
    console.log(data);
    console.log('Fin del stram ...\n');
    console.log(data.length);
});