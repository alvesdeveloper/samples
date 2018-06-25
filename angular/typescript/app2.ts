class Carro{
    private modelo: string 
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }

}


class Concessionaria {
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

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): any {
        return this.carroPreferido
    }

    public comprarCarro(carro: any): void{
        this.carro = carro
    }

    public dizerCarroQuetem(): any{
        return this.carro    
    }
}

/*criando carros*/
let carroA = new Carro('civic', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('palio', 2)

/*Lista de carros*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)


/*Exibindo a lista de carro*/
console.log(concessionaria.mostrarListaDeCarros())
