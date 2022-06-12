
//filesystem
var fs = require('fs');

/*Leer directorio sincrono
var files = fs.readdirSync('./');
console.log(files);
*/
//leer directorio asincrono
fs.readdir('./', (err,files) =>{
    if(err){
      throw err;  
    }
    console.log(files);

      /*leer sincrono
      var archivo = fs.readFileSync('./ext/h.txt','UTF-8');
      console.log('Contenido del archivo');
      console.log(archivo);
      */

      //leer archivo asincrono
      fs.readFile('./ext/h.txt','UTF-8',(err,archivo) =>{
        if(err){
            throw err;  
          }
          console.log(archivo);
      });

      console.log('Contenido del archivo');
     
});
