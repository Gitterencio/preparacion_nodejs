const fs = require('fs');

const archivo = './ext/prueba.txt';

//validar si existe el archivo
/*
if(fs.existsSync(archivo)){
    console.log('existe');
}else{
    console.log('NO existe');
}
*/

/*
fs.access(archivo,fs.constants.F_OK,(err) =>{
    if(err){
        console.log('NO existe');
    }else{
        console.log('existe');
    }
})
*/

//Escribir en un archivo

const contenido = 'Menos';

//fs.writeFileSync(archivo,contenido);
//console.log('Se ha escrito en el arcivo');

/*
fs.writeFile(archivo,contenido,(err) =>{
    if(err) throw ('Error de escritura');
    console.log('Se ha escrito en el archivo');
});
*/

const texadd = '\naqui hay mas texto';

fs.appendFile(archivo,texadd,(err) =>{
    if(err) throw ('Error al agregar texto');
    console.log('Se ha agrgaddo');
});
