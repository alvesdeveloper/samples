import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean{
        console.log('regra insert')
        return true
    }
    atualizar(object: Concessionaria): boolean{
        console.log('regra update')
        return true
    }
    remover(id: number): Concessionaria{
        console.log('regra delete')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria{
        console.log('regra select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any]{
        console.log('regra getAll')
        return [new Concessionaria('', [])]
    }
}