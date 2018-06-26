"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('regra insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('regra update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('regra delete');
        return null;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('regra select');
        return null;
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('regra getAll');
        return [new Array];
    };
    return ConcessionariaDao;
}());
