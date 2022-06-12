const fs = require('fs');

// renombrar sincrono

  //fs.renameSync('./ext/h.txt','./ext/hola.txt');

// renombrar asincrono

    /*fs.rename('./ext/hola.txt','./ext/lamina.txt',(err) =>{
    if(err){
        throw(err);
    }

    console.log('Archivo renombrado');
});
    */
// mover
/*
fs.rename('./ext/lamina.txt','./ext/css/lamina.txt',(err) =>{
    if(err){
        throw(err);
    }

    console.log('Archivo movido');
});
*/
//elimninar

fs.unlinkSync('./ext/css/lamina.txt');
console.log('Archivo eliminado');