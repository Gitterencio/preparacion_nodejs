//node5_crear_exportar_modulos.js

const Person = require('./node4');

let jose = new Person('jose');

jose.on('hablar',(mensaje)=>{
    console.log(`${jose.nombre} : ${mensaje}`);
});

jose.emit('hablar','caramelo');


//ejecutar procesos

console.log('ejecutar procesos');

const exec = require('child_process').exec;

//ls en gitbach
exec('ls',(err,stdout) => {
    if(err){
        throw err;
    };

    console.log('Comando ejecutado');
    console.log(stdout);
});


/*error ,no se

const x = 10;
const y = 20;

exec(' ./script.sh '+ x + ' ' + y,(err,stdout) => {
    if(err){
        throw err;
    };

    console.log('Comando ejecutado');
    console.log(stdout);
});
*/



