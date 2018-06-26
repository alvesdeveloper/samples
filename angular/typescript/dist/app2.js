"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/*criando carros*/
var carroA = new Carro_1.default('civic', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('palio', 2);
/*Lista de carros*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/*Exibindo a lista de carro*/
//console.log(concessionaria.mostrarListaDeCarros())
/* Comprar o carro */
var cliente = new Pessoa_1.default('Pedro', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQuetem());
