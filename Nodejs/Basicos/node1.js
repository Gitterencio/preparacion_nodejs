//Basico
console.log("\nBasico");
var a=5;
var b = 8;

console.log(a+b);

console.log("El resultado es "+(a+b));

console.log(`El resultado es ${a+b}`);

console.log(`El resultado es ${a==b}`); 

//direccion
console.log(__dirname);
//direccion y nombre
console.log(__filename);

var path = require("path");
//nombre simple
console.log(path.basename(__filename));

//Procesos
console.log("\nProcesos");

console.log(process.argv);

//node node1.js --nombre "nombre" --edad 30

//funcion
function param(p){
    var index = process.argv.indexOf(p);
    //console.log(index);
    return process.argv[index+1];
}

var nombre = param('--nombre');
var edad = param('--edad'); 
console.log(`Tu nombre es ${nombre} y tienes ${edad} años`);


//Imprimir terminal
console.log("\nLeer y escribir consola");
/*
process.stdout.write("Hola mundo\n");
process.stdout.write("Escribe :\n");

var n1;

process.stdin.on('data',function(data){
    n1 =data.toString().trim();
    process.stdout.write(`Hola ${n1} \n`);
    process.exit();
});
*/
var preguntas = ['¿Cual es tu nombre?','¿Que edad tienes?','¿Que dia es hoy?'];

var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]+"\n");

}

process.stdin.on('data',function(data){
    respuestas.push(data.toString().trim());

    if(respuestas.length<preguntas.length){
        pregunta(respuestas.length);
    }else{
        process.exit();
    }
    });

    pregunta(0);

    

























