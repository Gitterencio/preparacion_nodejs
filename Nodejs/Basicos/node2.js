//modulos
console.log("Modulos\n");

//https://nodejs.org/api/

var path = require('path'); //importe de modulo
console.log(path.basename(__filename));
console.log(path.join(__dirname,'www','img'));

var util = require('util');
util.log("Hola");

console.log(util.format('%s:%d','foo',50));

var v8 = require('v8');

console.log(v8.getHeapStatistics());