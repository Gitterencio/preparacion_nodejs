//eventos
console.log("Eventos y herencia");
/*
const events = require('events');
const emitter = new events.EventEmitter();
*/

const eventEmitter = require('events').EventEmitter;

const util = require('util');

//objeto
var Person = function(nombre){
    this.nombre = nombre;
};


//herencia
util.inherits(Person, eventEmitter);

/*instancia
let person = new Person('Larry'); 

person.on('hablar',(mensaje)=>{
    console.log(`${person.nombre} : ${mensaje}`);
});

person.emit('hablar','caramelo');
*/


//console.log(`Me llamo ${person.nombre}`);
/*
emitter.on('eventoCustom', (mensaje,estatus) =>{
    console.log(`${estatus}: ${mensaje}`);
});

emitter.emit('eventoCustom','exito',200);
}*/

//Crear y expostar  modulos3

module.exports = Person;