import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/*criando carros*/
let carroA = new Carro('civic', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('palio', 2)

/*Lista de carros*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)


/*Exibindo a lista de carro*/
//console.log(concessionaria.mostrarListaDeCarros())

/* Comprar o carro */
let cliente = new Pessoa('Pedro', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if  (carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }

})

console.log(cliente.dizerCarroQuetem())