import { DaoInterface } from './DaoInterface'

class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: any): boolean{
        console.log('regra insert')
        return true
    }
    atualizar(object: any): boolean{
        console.log('regra update')
        return true
    }
    remover(id: number): any{
        console.log('regra delete')
        return null
    }
    selecionar(id: number): any{
        console.log('regra select')
        return null
    }
    selecionarTodos(): [any]{
        console.log('regra getAll')
        return [new Array]
    }
}