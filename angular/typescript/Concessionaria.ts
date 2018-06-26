import Carro from './Carro'

export default class Concessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listadeCarro: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listadeCarro
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }
}