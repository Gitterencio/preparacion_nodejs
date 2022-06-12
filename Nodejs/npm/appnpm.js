//instalar npm, npm install underscore
//buscar en pagina principal https://underscorejs.org/

const _= require('underscore');

const lista = [
    {'id': 1,'nombre' : 'Jose'},
    {'id': 2,'nombre' : 'Mael'},
    {'id': 3,'nombre' : 'Crsi'}
];

const res = _.findWhere(lista,{id:2});

console.log(res);