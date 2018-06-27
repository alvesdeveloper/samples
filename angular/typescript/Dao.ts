import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = ''

    inserir(object: T): boolean{
        console.log('regra insert')
        return true
    }
    atualizar(object: T): boolean{
        console.log('regra update')
        return true
    }
    remover(id: number): T{
        console.log('regra delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('regra select')
        return Object()
    }
    selecionarTodos(): [T]{
        console.log('regra getAll')
        return [Object()]
    }
}