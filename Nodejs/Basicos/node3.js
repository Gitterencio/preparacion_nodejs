//ReadLine
console.log(`ReadLine`);

var readline = require('readline');

//crear interfaz
var rl = readline.createInterface(process.stdin,process.stdout);

//objeto
var fecha = {
    dia: '',
    num: Number,
    numer: []
};
//pregunta
rl.question('¿Que dia es hoy?\n',(respuesta) => {
    fecha.dia = respuesta;
    rl.setPrompt('fecha\n');
    rl.prompt();    
    
});


//modulo util para formato
var util = require('util');
//evento, line es cada fin de linea
rl.on('line',(input) => {
    if(input.trim()>0){
    console.log('Agregado');
   fecha.num = input.trim();
   fecha.numer.push(input.trim());

  
   //repite el mesaje
    rl.setPrompt('fecha\n');
    rl.prompt();    
    }else{
        var mensaje = util.format("el dia %s, el ultimo %d y %j",fecha.dia,fecha.num,fecha.numer);
        console.log(mensaje);
        process.exit();
    }
});