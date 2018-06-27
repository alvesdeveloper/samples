import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean{
        console.log('regra insert')
        return true
    }
    atualizar(object: Pessoa): boolean{
        console.log('regra update')
        return true
    }
    remover(id: number): Pessoa{
        console.log('regra delete')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa{
        console.log('regra select')
        return new Pessoa('', '')
    }
    selecionarTodos(): [any]{
        console.log('regra getAll')
        return [new Pessoa('', '')]
    }
}